---
title: API-Übersicht
description: Übersicht der Ayunis Core API
sidebar_position: 1
---

# API-Referenz

Willkommen zur Ayunis Core API-Referenz. Dieser Abschnitt bietet detaillierte Dokumentation für alle öffentlichen APIs.

## API-Struktur

Die API ist in folgende Kategorien organisiert:

### Kernfunktionen

| Funktion         | Beschreibung                              |
| ---------------- | ----------------------------------------- |
| `createClient()` | Erstellt eine neue Ayunis-Client-Instanz  |
| `configure()`    | Aktualisiert die Client-Konfiguration     |

### Typen

Alle Typen werden aus dem Hauptpaket exportiert:

```typescript
import type { 
  ClientOptions,
  Config,
  // ... andere Typen
} from '@ayunis/core';
```

## Versionierung

Ayunis Core folgt [Semantic Versioning](https://semver.org/):

* **Major**-Versionen können Breaking Changes enthalten
* **Minor**-Versionen fügen neue Funktionen ohne Breaking Changes hinzu
* **Patch**-Versionen enthalten nur Fehlerbehebungen

## TypeScript-Unterstützung

Alle APIs sind vollständig typisiert. Aktivieren Sie den strengen Modus in Ihrer `tsconfig.json` für die beste Erfahrung:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

## API-Stabilität

| Stabilität   | Beschreibung                                |
| ------------ | ------------------------------------------- |
| Stabil       | Sicher für die Produktion zu verwenden      |
| Experimentell| Kann sich in Minor-Versionen ändern         |
| Veraltet     | Wird in zukünftigen Versionen entfernt      |

:::note
APIs, die als experimentell markiert sind, können sich ändern. Überprüfen Sie immer das Changelog beim Upgrade.
:::

