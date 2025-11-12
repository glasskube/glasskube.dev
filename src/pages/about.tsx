import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import type {ReactNode} from 'react';

const TITLE = 'About Glasskube';
const DESCRIPTION = 'About Glasskube and Distr';

export default function AboutPage(): ReactNode {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">About Glasskube</Heading>
            <div className="margin-top--lg">
              <p>
                Glasskube is a software company based in Vienna, Austria and Chicago, USA.
              </p>
              <p>
                The company specializes in cloud computing, Kubernetes, DevOps, and software distribution.
              </p>
              <p>
                Glasskube originally developed the Glasskube Kubernetes Package Manager, an Open Source project designed to simplify the installation and management of applications on Kubernetes clusters.
              </p>
              <p>
                This project is no longer actively maintained and is considered discontinued.
              </p>
              <p>
                It remains available for reference but should not be used in production.
              </p>
              <p>
                Building on the lessons learned from that project, Glasskube created Distr (<Link href="https://distr.sh">https://distr.sh</Link>) a modern software distribution platform to distribute applications and artifacts to self-managed environments.
              </p>
              <p>
              Distr provides tooling for self-managed, BYOC, air-gapped, and edge deployments while giving vendors visibility and control throughout the application lifecycle.              </p>
              <p>
                Today, Distr is Glasskube's actively developed and supported product, used by vendors and AI infrastructure teams worldwide.
              </p>
              <Heading as="h2" className="margin-top--lg">Summary</Heading>
              <ul>
                <li>
                  <strong>Glasskube</strong> Company behind Distr, expertise in DevOps, Cloud and Kubernetes.
                </li>
                <li>
                  <strong>Distr:</strong> Active software distribution platform for self-hosted and hybrid deployments.
                </li>
                <li>
                  <strong>Glasskube Kubernetes Package Manager:</strong> Legacy Open Source project, deprecated and no longer maintained.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

