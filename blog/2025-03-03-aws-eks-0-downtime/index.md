---
slug: eks-0-downtime
title: The Definitive Guide to Zero Downtime Deployments on EKS
description: TODO
authors: [kosmoz]
tags: [AWS, Kubernetes, DevOps]
image: TODO
---

If you have ever hosted a web-application on EKS, Amazon's managed Kubernetes offering, you are most-likely familiar with the AWS Load Balancer Controller project (formerly AWS ALB Ingress Controller).
If you have also _upgraded_ that application, you might also be familiar with reports like this:

![502 error report](/img/blog/2025-03-03-aws-eks-0-downtime/502-report.png)

<!-- truncate -->

The upgrade you just triggered has caused downtime for your application!
You might think that there is an error your application, but all your logs and metrics seem to indicate that it's doing just fine.
The truth is, that although the AWS Load Balancer Controller is a fantastic piece of software, it is surprisingly tricky to roll out releases without downtime.

In this blog post, we would like to share what we've learned

https://docs.aws.amazon.com/eks/latest/best-practices/load-balancing.html#_availability_and_pod_lifecycle

## Testing

Use [`siege`](https://github.com/JoeDog/siege)

## Solutions

### Pod Readiness Gate

https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/deploy/pod_readiness_gate/

### Graceful shutdown

Example web application (immediately exits when it receives SIGTERM)

```go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	if err := http.ListenAndServe(":8080", MyAppRouter()); err != nil {
		log.Fatal(err)
	}
}

func MyAppRouter() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Print(w, "Hello world!")
	}
}
```

Signal handling helper function

```go
func OnSigterm(callback func()) {
	sigint := make(chan os.Signal, 1)
	signal.Notify(sigint, syscall.SIGTERM, syscall.SIGINT)
	<-sigint
	callback()
}
```

Example web application with graceful shutdown (wrong)

```go
func main() {
	srv := http.Server{Addr: ":8080", Handler: MyAppRouter()}

	go OnSigterm(func() {
		if err := srv.Shutdown(context.TODO()); err != nil {
			log.Fatal(err)
		}
	})

	if err := srv.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
```

Example web application with graceful shutdown (correct)

```go
func main() {
	srv := http.Server{Addr: ":8080", Handler: MyAppRouter()}

	shutdownComplete := make(chan struct{})
	go OnSigterm(func() {
		if err := srv.Shutdown(context.TODO()); err != nil {
			log.Fatal(err)
		}
		close(shutdownComplete)
	})

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
	<-shutdownComplete
}
```

![siege report with errors](/img/blog/2025-03-03-aws-eks-0-downtime/fail.png)

You can also see this in the AWS UI for target group monitoring as the "Target connection errors" metric

![siege report with errors](/img/blog/2025-03-03-aws-eks-0-downtime/target-group-metrics.png)

### Termination Delay

example deployment with `preStop` lifecycle hook

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  template:
    spec:
      terminationGracePeriodSeconds: 40
      containers:
        - name: my-app
          # ...
          lifecycle:
            preStop:
              exec:
                command: [sh, -c, 'sleep 20']
```

More and more common to see applications use distroless base images.
These don't contain the typical GNU coreutils or even a shell.

After carefully reading the Kubernetes documentation on the topic of [Pod termination](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination),
you might be tempted to add a sidecar container with a `preStop` lifecycle hook to your deployment to stop your application to be terminated too quickly.

```yaml
- name: busybox
  image: busybox
  command:
    - sh
    - -c
    - |
      trap 'echo signal received' TERM INT
      echo waiting for signal
      sleep 9999999999d & wait || exit 0
  lifecycle:
    preStop:
      exec:
        command: [sh, -c, 'sleep 20']
```

Unfortunately, after lots of investigation, I have found that this does not work.
Although your application container keeps running until the Kubelet sends the termination signal to all your containers, the ports are immediately closed as soon as the pod enters the `Terminating` phase.

In those cases, your only option is to bake this feature directly into your application. You can either stick with the `preStop` lifecycle hook idea and implement something like a sleep sub-command or HTTP endpoint, or (my preferred solution) allow your application to wait for some time before shutting down the server.

```go
var terminationDelay = 20 * time.Second

func main() {
	srv := http.Server{Addr: ":8080", Handler: MyAppRouter()}

	shutdownComplete := make(chan struct{})
	go OnSigterm(func() {
    time.Sleep(terminationDelay)
		if err := srv.Shutdown(context.TODO()); err != nil {
			log.Fatal(err)
		}
    time.Sleep(terminationDelay)
		close(shutdownComplete)
	})

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatal(err)
	}
	<-shutdownComplete
}
```

![siege report with no errors](/img/blog/2025-03-03-aws-eks-0-downtime/success.png)
