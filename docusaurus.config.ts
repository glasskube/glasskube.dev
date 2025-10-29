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
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_EloQUW6cgfbTc0pI9c5CXElhQ4gVGRoBsrUAoakJVoQ',
        appUrl: 'https://p.glasskube.eu',
        ui_host: 'https://eu.posthog.com',
        enableInDevelopment: false,
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
      content: `🎉 <a href="https://distr.sh/docs/getting-started/what-is-distr/" target="_blank">Distr</a> Launch Week is happening this week! <a href="/blog/tags/distr-launch-week/">Check out all announcements</a> ⭐`,
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
        {
          label: 'Docs',
          to: 'https://distr.sh/docs/getting-started/what-is-distr/',
        },
        {label: 'Blog', to: '/blog/'},
        {
          type: 'dropdown',
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'White Paper',
              to: '/white-paper/building-blocks/',
            },
            {
              label: 'Case Studies',
              to: '/case-studies/',
            },
          ],
        },
        {label: 'Pricing', to: '/pricing'},
        {type: 'custom-wrapper', position: 'right'},
        {label: 'Login', to: 'https://app.distr.sh/', position: 'right'},
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
