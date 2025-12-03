# Ayunis Core Documentation

Official documentation site for Ayunis Core, built with [Docusaurus](https://docusaurus.io/) and [TinaCMS](https://tina.io/).

## Features

- **Internationalization**: English and German language support
- **Visual Editing**: TinaCMS provides a user-friendly interface for content editing
- **OpenAPI Integration**: Auto-generated API documentation from Swagger/OpenAPI specs
- **GitHub Pages**: Automatic deployment via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

Start the development server with TinaCMS:

```bash
npm run dev
```

For German locale:

```bash
npm run dev:de
```

Access:
- Documentation: http://localhost:5555
- CMS Admin: http://localhost:5555/admin

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run docusaurus:preview
```

## Project Structure

```
ayunis-docs/
├── docusaurus/                  # Documentation content
│   ├── en/                      # English content
│   │   └── docusaurus-plugin-content-docs/current/
│   │       ├── getting-started/
│   │       ├── concepts/
│   │       ├── api/
│   │       ├── api-reference/   # Generated OpenAPI docs
│   │       ├── guides/
│   │       └── contributing/
│   └── de/                      # German translations
│       └── docusaurus-plugin-content-docs/current/
├── openapi/                     # OpenAPI specification
│   └── ayunis-api.json
├── src/
│   ├── app/                     # App-level styles
│   ├── pages/                   # Custom pages
│   └── widgets/                 # Reusable components
├── static/
│   ├── admin/                   # TinaCMS admin (generated)
│   └── img/                     # Static images
├── tina/
│   └── config.ts                # TinaCMS configuration
├── docusaurus.config.ts         # Docusaurus configuration
└── .github/workflows/           # CI/CD workflows
```

## Adding Content

### Via TinaCMS (Recommended)

1. Start dev server: `npm run dev`
2. Go to http://localhost:5555/admin
3. Select a collection (e.g., "Getting Started")
4. Create or edit content using the visual editor
5. Save changes (commits to Git automatically in production)

### Via Git

1. Create a new `.md` file in the appropriate directory
2. Add frontmatter:

```markdown
---
title: Your Page Title
description: A brief description
sidebar_position: 1
---

# Your Page Title

Content goes here...
```

3. Commit and push your changes

## OpenAPI Documentation

### Update API docs from backend

```bash
# Fetch latest spec (requires backend running on port 3000)
npm run openapi:fetch

# Regenerate docs
npm run openapi:update
```

### Manual update

1. Place OpenAPI JSON at `openapi/ayunis-api.json`
2. Run `npm run docs:clean && npm run docs:generate`

## Deployment

### GitHub Pages (Current Setup)

Automatic deployment on push to `main` via GitHub Actions.

**Required GitHub Secrets:**

| Secret | Description |
|--------|-------------|
| `SITE_URL` | Site URL (e.g., `https://company.github.io`) |
| `BASE_URL` | Base path (e.g., `/repo-name/` or `/`) |
| `TINA_CLIENT_ID` | TinaCMS client ID |
| `TINA_TOKEN` | TinaCMS read-only token |

### TinaCMS Setup

1. Create project at https://app.tina.io
2. Connect your GitHub repository
3. Add your site URL(s)
4. Create a read-only token
5. Add credentials to GitHub Secrets

## Environment Variables

See `env.example` for all configurable options.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with TinaCMS |
| `npm run dev:de` | Start dev server (German locale) |
| `npm run build` | Build for production |
| `npm run docusaurus:preview` | Preview production build |
| `npm run docs:generate` | Generate OpenAPI docs |
| `npm run docs:clean` | Clean generated OpenAPI docs |
| `npm run openapi:update` | Fetch and regenerate OpenAPI docs |

## License

This documentation is licensed under [MIT License](LICENSE).
