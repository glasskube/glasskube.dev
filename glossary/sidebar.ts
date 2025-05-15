import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  glossary: [
    {
      type: 'category',
      label: 'Glossary',
      link: {
        type: 'generated-index',
        title: 'Kubernetes Glossary',
        description:
          'Learn about common Kubernetes and cloud-native terminology',
        slug: '/',
      },
      items: [
        'air-gapped',
        'byoc-definition',
        'cve',
        'devops',
        'helm',
        'helm-chart',
        'isv',
        'kubernetes',
        'kubernetes-configuration-management',
        'kubernetes-operator',
        'kubernetes-package-management',
        'kustomize',
        'license-mgmt',
        'oci-registry',
        'on-premises-definition',
        'saas-definition',
        'sbom',
        'self-managed-software',
        'vulnerability-scanning',
      ],
    },
  ],
};

export default sidebars;
