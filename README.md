# Ayunis Core Documentation

Official documentation site for Ayunis Core, built with [Docusaurus](https://docusaurus.io/) and [Decap CMS](https://decapcms.org/).

## Features

- **Text-Based Content**: All documentation is stored as Markdown files in the repository
- **Visual Editing**: Decap CMS provides a user-friendly interface for non-technical contributors
- **Bitbucket Support**: Native integration with Bitbucket (also supports GitHub, GitLab)
- **OpenAPI Integration**: Auto-generated API documentation from Swagger/OpenAPI specs
- **AI-Friendly**: Plain text format makes it easy for AI tools to add and modify content

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

Access:
- Documentation: http://localhost:5555
- CMS Admin: http://localhost:5555/admin

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run serve
```

## Project Structure

```
ayunis-docs/
├── docs/                    # Documentation content (Markdown)
│   ├── getting-started/     # Getting started guides
│   ├── concepts/            # Core concepts
│   ├── api/                 # Manual API docs
│   ├── api-reference/       # Generated OpenAPI docs
│   ├── guides/              # How-to guides
│   └── contributing/        # Contribution guidelines
├── openapi/                 # OpenAPI specification files
│   └── ayunis-api.json      # Swagger/OpenAPI spec
├── src/
│   ├── components/          # React components
│   ├── css/                 # Custom styles
│   └── pages/               # Custom pages
├── static/
│   ├── admin/               # Decap CMS admin interface
│   │   ├── index.html
│   │   └── config.yml       # CMS configuration
│   └── img/                 # Static images
├── docusaurus.config.ts     # Docusaurus configuration
└── sidebars.ts              # Sidebar configuration
```

## Adding Content

### For Developers (via Git)

1. Create a new `.md` file in the appropriate `docs/` subdirectory
2. Add frontmatter with required fields:

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

### For Non-Technical Users (via Decap CMS)

1. Navigate to `/admin` on your deployed site
2. Log in with your Bitbucket account
3. Use the visual editor to create and edit content
4. Click "Publish" to save changes (creates a Git commit)

### For AI Tools

The documentation content is stored as plain Markdown files, making it easy for AI tools to:
- Add new documentation pages
- Update existing content
- Generate API documentation
- Create code examples

Simply create or modify `.md` files in the `docs/` directory following the established structure.

## OpenAPI Documentation

### Update API docs from your backend

```bash
# Fetch latest spec from your running backend
npm run openapi:fetch

# Regenerate docs
npm run openapi:update
```

### Manual update

1. Place your OpenAPI/Swagger JSON at `openapi/ayunis-api.json`
2. Run `npm run docs:clean && npm run docs:generate`

## Decap CMS Configuration

### Bitbucket Setup

1. Update `static/admin/config.yml`:
   ```yaml
   backend:
     name: bitbucket
     repo: your-workspace/ayunis-docs  # Your repo
     branch: main
   ```

2. Create an OAuth consumer in Bitbucket:
   - Go to Workspace settings → OAuth consumers
   - Add consumer with callback URL: `https://your-site.com/admin/`
   - Enable: Account Read, Repository Write

### Local Development

For local CMS testing, uncomment in `config.yml`:
```yaml
local_backend: true
```

Then run: `npx decap-server`

## Deployment

The site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Use `npm run build` with `build` as the publish directory
- **Bitbucket Pipelines**: Configure `bitbucket-pipelines.yml`

## Contributing

We welcome contributions! See the [Contributing Guide](docs/contributing/overview.md) for details.

## License

This documentation is licensed under [MIT License](LICENSE).
