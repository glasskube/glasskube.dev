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
        'devops',
        'helm',
        'kubernetes-configuration-management',
        'kubernetes-operator',
        'kubernetes-package-management',
        'kustomize',
      ],
    },
  ],
};

export default sidebars;
