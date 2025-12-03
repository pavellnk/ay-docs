import { defineConfig, LocalAuthProvider } from 'tinacms';

// Git branch - auto-detected from hosting provider or defaults to 'main'
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === 'true';

export default defineConfig({
  // Local development: use local GraphQL server
  // Production: use Tina Cloud
  ...(isLocal
    ? {
        contentApiUrlOverride: 'http://localhost:4001/graphql',
        authProvider: new LocalAuthProvider(),
      }
    : {
        clientId: process.env.TINA_CLIENT_ID,
        token: process.env.TINA_TOKEN,
      }),

  branch,

  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },

  media: {
    tina: {
      mediaRoot: 'img',
      publicFolder: 'static',
    },
  },

  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // ========================================
      // ENGLISH (Default)
      // ========================================
      {
        name: 'gettingStarted',
        label: '🇬🇧 Getting Started',
        path: 'docusaurus/en/docusaurus-plugin-content-docs/current/getting-started',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'concepts',
        label: '🇬🇧 Core Concepts',
        path: 'docusaurus/en/docusaurus-plugin-content-docs/current/concepts',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'api',
        label: '🇬🇧 API Documentation',
        path: 'docusaurus/en/docusaurus-plugin-content-docs/current/api',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'guides',
        label: '🇬🇧 Guides',
        path: 'docusaurus/en/docusaurus-plugin-content-docs/current/guides',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'contributing',
        label: '🇬🇧 Contributing',
        path: 'docusaurus/en/docusaurus-plugin-content-docs/current/contributing',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Description' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      // ========================================
      // GERMAN (Deutsch)
      // ========================================
      {
        name: 'gettingStartedDe',
        label: '🇩🇪 Erste Schritte',
        path: 'docusaurus/de/docusaurus-plugin-content-docs/current/getting-started',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Beschreibung' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },
      {
        name: 'conceptsDe',
        label: '🇩🇪 Kernkonzepte',
        path: 'docusaurus/de/docusaurus-plugin-content-docs/current/concepts',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Beschreibung' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },
      {
        name: 'apiDe',
        label: '🇩🇪 API Dokumentation',
        path: 'docusaurus/de/docusaurus-plugin-content-docs/current/api',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Beschreibung' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },
      {
        name: 'guidesDe',
        label: '🇩🇪 Anleitungen',
        path: 'docusaurus/de/docusaurus-plugin-content-docs/current/guides',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Beschreibung' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },
      {
        name: 'contributingDe',
        label: '🇩🇪 Mitwirken',
        path: 'docusaurus/de/docusaurus-plugin-content-docs/current/contributing',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Beschreibung' },
          { type: 'number', name: 'sidebar_position', label: 'Sidebar Position' },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },
    ],
  },
});

