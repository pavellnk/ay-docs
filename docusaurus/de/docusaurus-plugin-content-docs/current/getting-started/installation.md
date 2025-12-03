---
title: Installation
description: Wie Sie Ayunis Core in Ihrem Projekt installieren
sidebar_position: 2
---

# Installation

Richten Sie Ayunis Core in Ihrem Projekt in wenigen Schritten ein.

## Voraussetzungen

Bevor Sie Ayunis Core installieren, stellen Sie sicher, dass Sie haben:

* **Node.js** 18.0 oder höher
* **npm**, **yarn** oder **pnpm** Paketmanager

## Paket-Installation

Installieren Sie Ayunis Core mit Ihrem bevorzugten Paketmanager:

```bash
npm install @ayunis/core
```

## TypeScript-Konfiguration

Wenn Sie TypeScript verwenden (empfohlen), stellen Sie sicher, dass Ihre `tsconfig.json` enthält:

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}
```

## Installation überprüfen

Erstellen Sie eine einfache Testdatei, um die Installation zu überprüfen:

```typescript
import { version } from '@ayunis/core';

console.log(`Ayunis Core Version: ${version}`);
```

Führen Sie die Datei aus:

```bash
npx ts-node test.ts
```

Wenn Sie die Versionsnummer sehen, sind Sie fertig!

## Nächste Schritte

Nachdem Sie Ayunis Core installiert haben, fahren Sie mit der [Schnellstart](/de/docs/getting-started/quick-start)-Anleitung fort.

