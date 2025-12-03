---
title: Quick Start
description: Build your first Ayunis Core integration in minutes
sidebar_position: 3
---

# Quick Start

This guide will walk you through creating your first Ayunis Core integration in just a few minutes.

## Step 1: Create a New Project

Start by creating a new directory for your project:

```bash
mkdir my-ayunis-app
cd my-ayunis-app
npm init -y
```

## Step 2: Install Dependencies

Install Ayunis Core and TypeScript:

```bash
npm install @ayunis/core
npm install -D typescript ts-node @types/node
```

## Step 3: Initialize TypeScript

Create a basic TypeScript configuration:

```bash
npx tsc --init
```

## Step 4: Create Your First File

Create a file called `index.ts`:

```typescript title="index.ts"
import { createClient } from '@ayunis/core';

// Initialize the client
const client = createClient({
  // Add your configuration here
});

// Use the client
async function main() {
  console.log('Ayunis Core is ready!');
  
  // Your code here
}

main().catch(console.error);
```

## Step 5: Run Your Application

Execute your application:

```bash
npx ts-node index.ts
```

## What's Next?

Congratulations! You've created your first Ayunis Core application. Here are some next steps:

- Learn about [Core Concepts](/docs/concepts) to understand the fundamentals
- Explore the [API Reference](/docs/api) for detailed documentation
- Check out [Guides](/docs/guides) for common use cases

:::tip
The examples in this documentation use TypeScript for clarity and type safety. Ayunis Core works equally well with plain JavaScript.
:::

