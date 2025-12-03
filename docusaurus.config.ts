import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from 'docusaurus-plugin-openapi-docs';

const config: Config = {
  title: 'Ayunis Core',
  tagline: 'Documentation for Ayunis Core',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.ayunis.io',
  baseUrl: '/',

  organizationName: 'ayunis',
  projectName: 'ayunis-docs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // ==========================================================================
  // Internationalization (i18n)
  // ==========================================================================
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    path: 'docusaurus', // All i18n content under docusaurus/ folder
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      de: {
        label: 'Deutsch',
        htmlLang: 'de-DE',
      },
    },
  },

  // ==========================================================================
  // Presets
  // ==========================================================================
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docusaurus/en/docusaurus-plugin-content-docs/current', // Main docs source (English)
          sidebarPath: './docusaurus/_sidebar.config.ts',
          editUrl: 'https://github.com/ayunis/ayunis-docs/tree/main/',
          routeBasePath: 'docs',
          docItemComponent: '@theme/ApiItem',
        },
        blog: false,
        theme: {
          customCss: './src/app/styles/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // ==========================================================================
  // Plugins
  // ==========================================================================
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          ayunisApi: {
            specPath: 'openapi/ayunis-api.json',
            outputDir: 'docusaurus/en/docusaurus-plugin-content-docs/current/api-reference',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  // ==========================================================================
  // Theme Configuration
  // ==========================================================================
  themeConfig: {
    image: 'img/ayunis-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ayunis Core',
      logo: {
        alt: 'Ayunis Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          href: 'https://github.com/ayunis/ayunis-core',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Core Concepts',
              to: '/docs/concepts',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference/ayunis-core-api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/ayunis/ayunis-core/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ayunis/ayunis-core',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ayunis. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
