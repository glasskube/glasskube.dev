import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  future: {
    v4: true, // opt-in for Docusaurus v4 planned changes
    experimental_faster: true, // turns Docusaurus Faster on globally
  },

  title: 'Glasskube',
  tagline: 'Distribute your application to self-managed customers',
  favicon: 'img/favicon.png',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://glasskube.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'glasskube',
  projectName: 'glasskube.dev',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-matomo',
    '@docusaurus/theme-mermaid',
    [
      './custom-blog-plugin',
      {id: 'blog', routeBasePath: 'blog', path: './blog'},
    ],
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import("@docusaurus/plugin-ideal-image").PluginOptions} */
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'package-manager-docs',
        path: 'docs/package-manager',
        routeBasePath: 'products/package-manager/docs',
        editCurrentVersion: true,
        sidebarPath: 'docs/package-manager/sidebar.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: 'https://github.com/glasskube/glasskube.dev/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'package-manager-guides',
        path: 'guides/package-manager',
        routeBasePath: 'products/package-manager/guides',
        editCurrentVersion: true,
        sidebarPath: 'guides/package-manager/sidebar.ts',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl: 'https://github.com/glasskube/glasskube.dev/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'glossary',
        path: 'glossary',
        routeBasePath: 'glossary',
        sidebarPath: 'glossary/sidebar.ts',
        editUrl: 'https://github.com/glasskube/glasskube.dev/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: 'https://github.com/glasskube/packages/tree/main/packages',
            from: '/packages',
          },
          {
            to: '/contact',
            from: '/building-blocks-whitepaper-cta',
          },
          // Blog post redirects to distr.sh
          {
            to: 'https://distr.sh/blog/self-managed-vs-cloud-vs-byoc/',
            from: '/blog/self-managed-vs-cloud-vs-byoc/',
          },
          {
            to: 'https://distr.sh/blog/5-ways-to-succeed-without-access-to-customer-environments/',
            from: '/blog/5-ways-to-succeed-without-access-to-customer-environments/',
          },
          {
            to: 'https://distr.sh/blog/distr-v1-release-post/',
            from: '/blog/distr-v1-release-post/',
          },
          {
            to: 'https://distr.sh/blog/distr-v2-release-post/',
            from: '/blog/distr-v2-release-post/',
          },
          {
            to: 'https://distr.sh/blog/distr-vs-replicated/',
            from: '/blog/distr-vs-replicated/',
          },
          {
            to: 'https://distr.sh/blog/distr-v1.4-release-post/',
            from: '/blog/distr-v1.4-release-post/',
          },
          {
            to: 'https://distr.sh/blog/container-image-registry-comparison/',
            from: '/blog/container-image-registry-comparison/',
          },
          {
            to: 'https://distr.sh/blog/distr-tutorials/',
            from: '/blog/distr-tutorials/',
          },
          {
            to: 'https://distr.sh/blog/distr-docker-swarm/',
            from: '/blog/distr-docker-swarm/',
          },
          {
            to: 'https://distr.sh/blog/distr-dashboard/',
            from: '/blog/distr-dashboard/',
          },
          {
            to: 'https://distr.sh/blog/distr-registry/',
            from: '/blog/distr-registry/',
          },
          {
            to: 'https://distr.sh/blog/distr-docs/',
            from: '/blog/distr-docs/',
          },
          // Glossary page redirects to distr.sh
          {
            to: 'https://distr.sh/glossary/air-gapped-meaning/',
            from: '/glossary/air-gapped-meaning/',
          },
          {
            to: 'https://distr.sh/glossary/byoc-definition/',
            from: '/glossary/byoc-definition/',
          },
          {
            to: 'https://distr.sh/glossary/cve-common-vulnerabilities-and-exposures/',
            from: '/glossary/cve-common-vulnerabilities-and-exposures/',
          },
          {
            to: 'https://distr.sh/glossary/helm-chart/',
            from: '/glossary/helm-chart/',
          },
          {
            to: 'https://distr.sh/glossary/isv-meaning/',
            from: '/glossary/isv-meaning/',
          },
          {
            to: 'https://distr.sh/glossary/kubernetes/',
            from: '/glossary/kubernetes/',
          },
          {
            to: 'https://distr.sh/glossary/software-license-management/',
            from: '/glossary/software-license-management/',
          },
          {
            to: 'https://distr.sh/glossary/oci-container-artifact-registry/',
            from: '/glossary/oci-container-artifact-registry/',
          },
          {
            to: 'https://distr.sh/glossary/on-premises-definition/',
            from: '/glossary/on-premises-definition/',
          },
          {
            to: 'https://distr.sh/glossary/saas-definition/',
            from: '/glossary/saas-definition/',
          },
          {
            to: 'https://distr.sh/glossary/sbom-software-bill-of-materials/',
            from: '/glossary/sbom-software-bill-of-materials/',
          },
          {
            to: 'https://distr.sh/glossary/self-managed-software/',
            from: '/glossary/self-managed-software/',
          },
          {
            to: 'https://distr.sh/glossary/vulnerability-scanning/',
            from: '/glossary/vulnerability-scanning/',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/products/package-manager')) {
            return [
              existingPath.replace('/products/package-manager/docs', '/docs'),
              existingPath.replace(
                '/products/package-manager/guides',
                '/guides',
              ),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/embla.css',
            './node_modules/css-device-frames/dist/device-frames.css',
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 1,
          ignorePatterns: [
            '/telemetry/',
            '/srecon-raffle/',
            '/blog/authors/',
            '/blog/archive/',
            '/blog/tags/**',
            '**/guides/tags/**',
          ],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content: `🎉 The <a href="https://distr.sh/" target="_blank">Distr</a> <a href="/blog/distr-mcp-server/" target="_blank">MCP server</a> is now available as a remote MCP server and is hosted on <a href="https://hyprmcp.com/" target="_blank">https://hyprmcp.com</a>. ⭐`,
      isCloseable: false,
    },
    image: '/img/meta/distrimage.png',
    navbar: {
      title: 'Glasskube',
      logo: {
        alt: 'Glasskube Logo',
        src: 'img/glasskube-logo.svg',
      },
      items: [
        {label: 'About', to: '/#about'},
        {label: 'Expertise', to: '/#expertise'},
        {label: 'Products', to: '/#products'},
        {label: 'Blog', to: '/#blog'},
        {type: 'custom-wrapper', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Distr',
          items: [
            {label: 'GitHub', to: 'https://github.com/glasskube/distr/'},
            {
              label: 'Docs',
              to: 'https://distr.sh/docs/getting-started/what-is-distr/',
            },
            {label: 'Signup', href: 'https://signup.distr.sh/'},
          ],
        },
        {
          title: 'Package Manager',
          items: [
            {label: 'GitHub', to: 'https://github.com/glasskube/glasskube/'},
            {label: 'Docs', to: '/products/package-manager/docs/'},
            {
              label: 'Guides',
              to: '/products/package-manager/guides/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Discord', href: 'https://discord.com/invite/SxH6KUCGH7'},
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/glasskube/',
            },
            {label: 'Twitter / X', href: 'https://x.com/glasskube'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog/'},
            {label: 'Glossary', to: '/glossary/'},
            {label: 'Contact us', to: '/contact/'},
            {
              label: 'Schedule a meeting',
              href: 'https://cal.glasskube.com/team/founder/30min',
            },
          ],
        },
      ],
      copyright: `<img src="/img/glasskube-logo-white.png" class="footer-logo" alt="Glasskube Logo"/><br>Copyright © ${new Date().getFullYear()} Glasskube, Inc.<br>Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    matomo: {
      matomoUrl: 'https://a.glasskube.eu/',
      siteId: '5',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
