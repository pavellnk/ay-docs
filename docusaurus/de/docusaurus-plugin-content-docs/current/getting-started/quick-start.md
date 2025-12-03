---
title: Schnellstart
description: Erstellen Sie Ihre erste Ayunis Core Integration in Minuten
sidebar_position: 3
---

# Schnellstart

Diese Anleitung führt Sie durch die Erstellung Ihrer ersten Ayunis Core Integration in nur wenigen Minuten.

## Schritt 1: Neues Projekt erstellen

Beginnen Sie mit der Erstellung eines neuen Verzeichnisses für Ihr Projekt:

```bash
mkdir my-ayunis-app
cd my-ayunis-app
npm init -y
```

## Schritt 2: Abhängigkeiten installieren

Installieren Sie Ayunis Core und TypeScript:

```bash
npm install @ayunis/core
npm install -D typescript ts-node @types/node
```

## Schritt 3: TypeScript initialisieren

Erstellen Sie eine grundlegende TypeScript-Konfiguration:

```bash
npx tsc --init
```

## Schritt 4: Erste Datei erstellen

Erstellen Sie eine Datei namens `index.ts`:

```typescript title="index.ts"
import { createClient } from '@ayunis/core';

// Client initialisieren
const client = createClient({
  // Fügen Sie hier Ihre Konfiguration ein
});

// Client verwenden
async function main() {
  console.log('Ayunis Core ist bereit!');
  
  // Ihr Code hier
}

main().catch(console.error);
```

## Schritt 5: Anwendung ausführen

Führen Sie Ihre Anwendung aus:

```bash
npx ts-node index.ts
```

## Was kommt als Nächstes?

Herzlichen Glückwunsch! Sie haben Ihre erste Ayunis Core Anwendung erstellt. Hier sind einige nächste Schritte:

- Lernen Sie die [Kernkonzepte](/docs/concepts), um die Grundlagen zu verstehen
- Erkunden Sie die [API-Referenz](/docs/api) für detaillierte Dokumentation
- Schauen Sie sich die [Anleitungen](/docs/guides) für häufige Anwendungsfälle an

:::tip
Die Beispiele in dieser Dokumentation verwenden TypeScript für Klarheit und Typsicherheit. Ayunis Core funktioniert genauso gut mit reinem JavaScript.
:::
