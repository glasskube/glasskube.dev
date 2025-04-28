export const PricingFAQs: PricingFAQ[] = [
  {
    id: 'distr',
    question: 'What is Distr?',
    answer:
      'Distr is an Open Source software distribution platform that provides a ready-to-use setup with prebuilt components to help software and AI companies distribute applications to customers in complex, self-managed environments.',
  },
  {
    id: 'use-cases',
    question: 'What are the main use cases for Distr?',
    answer:
      'Distr is ideal for on-premises, VPC, and self-managed software deployments, Bring Your Own Cloud (BYOC) automation, and edge & fleet management scenarios.',
  },
  {
    id: 'Integration',
    question: 'How long does the integration take?',
    answer:
      'Getting started with Distr only takes you a couple of minutes. We have a GitHub integration and you can plug Distr into your existing CI/CD pipeline.',
  },
  {
    id: 'customer-portal',
    question: 'What is the Distr Customer Portal?',
    answer:
      'The customer portal is a white labeled or co-branded portal for your customers to receive installation instructions, updates, and support.',
  },
  {
    id: 'free-trial',
    question: 'Is there a free trial for Distr?',
    answer:
      'Yes. We offer Free Forever plan that is designed for individuals and teams who are starting out with Distr. For the Pro plan, we offer a free trial for a month.',
  },
  {
    id: 'self-hosting',
    question: 'Can I self-host Distr?',
    answer:
      'Yes, Distr is fully Open Source and can be self-hosted either using Docker Compose or as a Helm chart in Kubernetes. You can find detailed deployment instructions in our documentation.',
  },
  {
    id: 'container-registry',
    question: 'What types of artifacts can I distribute?',
    answer:
      'Distr supports OCI-compatible artifacts including Docker images, Helm charts, and Terraform modules.',
  },
  {
    id: 'license-management',
    question: 'How does license management work?',
    answer:
      'Distr allows you to distribute specific versions of your application to specific customers, enabling granular control over who can access which versions of your software.',
  },
  {
    id: 'sdk-integration',
    question: 'Can I integrate Distr with my own applications?',
    answer:
      'Yes, Distr provides a rich SDK (currently available for JavaScript) that allows you to interact with Distr directly from your application code. More language support is planned for the future.',
  },
  {
    id: 'support',
    question: 'Where can I get help?',
    answer:
      'If you have any questions or inquiries, send an email over to office@glasskube.com so we can assist you. Alternatively, feel free to post your questions in our <a href="https://discord.gg/6qqBSAWZfW" target="_blank" rel="noopener noreferrer">community Discord</a>; we\'d be happy to connect with you.',
  },
  {
    id: 'ai-companies',
    question: 'Can I use Distr as an AI company?',
    answer:
      'Yes, Distr is purpose-built for AI companies to distribute their applications and services to self-managed environments.',
  },
];

export type PricingFAQ = {
  id: string;
  question: string;
  answer: string;
};
