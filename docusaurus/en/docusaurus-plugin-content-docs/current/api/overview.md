---
title: API Overview
description: Overview of the Ayunis Core API
sidebar_position: 1
---

# API Reference

Welcome to the Ayunis Core API Reference. This section provides detailed documentation for all public APIs.

## API Structure

The API is organized into the following categories:

### Core Functions

| Function         | Description                          |
| ---------------- | ------------------------------------ |
| `createClient()` | Creates a new Ayunis client instance |
| `configure()`    | Updates client configuration         |

### Types

All types are exported from the main package:

```typescript
import type { 
  ClientOptions,
  Config,
  // ... other types
} from '@ayunis/core';
```

## Versioning

Ayunis Core follows [Semantic Versioning](https://semver.org/):

* **Major** versions may include breaking changes
* **Minor** versions add new features without breaking changes
* **Patch** versions include bug fixes only

## TypeScript Support

All APIs are fully typed. Enable strict mode in your `tsconfig.json` for the best experience:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## API Stability

| Stability    | Description                        |
| ------------ | ---------------------------------- |
| Stable       | Safe to use in production          |
| Experimental | May change in minor versions       |
| Deprecated   | Will be removed in future versions |

:::note
APIs marked as experimental are subject to change. Always check the changelog when upgrading.
:::
