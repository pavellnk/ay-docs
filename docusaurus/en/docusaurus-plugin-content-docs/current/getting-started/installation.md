---
title: Installation
description: How to install Ayunis Core in your project
sidebar_position: 2
---

# Installation

Get Ayunis Core set up in your project in just a few steps.

## Prerequisites

Before installing Ayunis Core, make sure you have:

* **Node.js** 18.0 or higher
* **npm**, **yarn**, or **pnpm** package manager

## Package Installation

Install Ayunis Core using your preferred package manager:

```bash
npm install @ayunis/core
```

## TypeScript Configuration

If you're using TypeScript (recommended), ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```

## Verify Installation

Create a simple test file to verify the installation:

```typescript
import { version } from '@ayunis/core';

console.log(`Ayunis Core version: ${version}`);
```

Run the file:

```bash
npx ts-node test.ts
```

If you see the version number printed, you're all set!

## Next Steps

Now that you have Ayunis Core installed, continue to the [Quick Start](/docs/getting-started/quick-start) guide to build your first integration.
