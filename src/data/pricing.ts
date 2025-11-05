export const PricingFAQs: PricingFAQ[] = [
  {
    id: 'what-is-distr',
    question: 'What is Distr?',
    answer:
      'Distr is an Open Source software distribution platform that provides a ready-to-use setup with prebuilt components to help software and AI companies distribute applications to customers in complex, self-managed environments.',
  },
  {
    id: 'plan-choice',
    question: 'Which plan should I choose?',
    answer: `
    <strong>Starter</strong><br/>
    Choose Starter if you're validating customer-install GTM for the first time. Usually this is one internal champion testing the flow. Agent-based installs and Docker make setup extremely fast — you ship updates quickly, iterate rapidly, and customers get the newest version immediately. Ideal for fast learning and proving distribution works before scaling.<br/><br/>
  
    <strong>Pro</strong><br/>
    Choose Pro once you're past POC and rolling out to multiple customers. Platform/DevOps teams typically take over here. If scalabitly is important, deployments move to Kubernetes/Helm or Artifact-based distribution. Focus shifts from pure speed to control: version visibility, license enforcement, SSO/RBAC access control across both your team and your customers’ teams.<br/><br/>
  
    <strong>Enterprise</strong><br/>
    Choose Enterprise when Distr becomes your entire commercial self-hosted delivery suite. You’re not just distributing software anymore — but also documentation, support portals, public images, automated workflows, dynamic licensing, usage-based billing and more — all inside one platform. Enterprise includes dedicated infrastructure isolation and full white-label control.
    `,
  },
  
  {
    id: 'pricing-model',
    question: 'How does pricing work?',
    answer:
      'Pricing is based on two metrics: internal admin users (your team operating Distr) and external customers (install targets). Your monthly price is calculated based on the number of internal users AND the number of customers.',
  },
  {
    id: 'how-long-to-integrate',
    question: 'How long does it take to integrate Distr?',
    answer:
      'Most teams ship their first customer install within right after our onboarding. We support GitHub release automation, pre/post install scripts, and agent based distributions out of the box. To make sure you get unlocked fast — Starter includes an onboarding call, and Pro includes white glove onboarding.',
  },
  {
    id: 'self-hosting',
    question: 'Can I self-host Distr?',
    answer:
      'Yes. Distr is fully Open Source and can be self-hosted via Docker or Kubernetes.',
  },
  {
    id: 'support',
    question: 'Where do I get support?',
    answer:
      'Starter includes basic email support. Pro adds private Slack support. Enterprise includes a dedicated support engineer and SLA.',
  },
];

export type PricingFAQ = {
  id: string;
  question: string;
  answer: string;
};
