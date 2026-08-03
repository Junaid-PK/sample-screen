# News Dashboard UI Prototype

A cross-platform news and publisher-ranking interface built with Expo, React Native, and TypeScript. The project explores how a dense content experience can stay navigable on a small screen through reusable cards, compact ranking rows, and route-driven tabs.

## What is implemented

- News and rankings screens connected with Expo Router
- Horizontally scrollable content-source selector
- Publisher profile and follower summary
- Reusable article cards with breaking-news, reaction, comment, and share states
- Ranked outlet list with medal, follower, follow, and trend treatments
- Advertisement placements and custom top and bottom navigation
- Shared components and typed fixture models
- iOS, Android, and web targets from one React Native codebase

## Project structure

```text
app/
  (tabs)/          Route-level news and rankings screens
components/        Reusable navigation, content, profile, and ranking UI
constants/         Typed prototype data and shared theme values
assets/images/     Local icons and advertising artwork
hooks/             Platform-aware colour and theme helpers
```

The route files compose feature-level components while `constants/data.ts` provides typed fixtures for repeatable UI development.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm ci
npm start
```

From the Expo terminal, open the project in Expo Go, an iOS simulator, an Android emulator, or a browser. The platform-specific commands are also available directly:

```bash
npm run ios
npm run android
npm run web
```

Check the source before committing changes:

```bash
npm run check
```

The same lint, type-check, and static web-export gates run in GitHub Actions on every push and pull request.

## Data and product boundary

This repository is a UI prototype. News stories, publishers, follower counts, rankings, and trends are deterministic fixtures stored in the repository. It does not connect to a news API, authenticate users, persist interactions, deliver notifications, or represent live editorial data. Some buttons intentionally demonstrate visual and interaction states without completing a backend action.

Those constraints keep the project focused on responsive React Native composition, navigation, and component design. A production implementation would add an API boundary, server-owned ranking rules, persisted user preferences, accessible interaction feedback, analytics, and automated tests.

## Technology

- Expo 54 and Expo Router
- React 19 and React Native 0.81
- TypeScript
- React Navigation
- Expo Image, Haptics, Symbols, and platform utilities

## Author

Built by [Junaid Hussnain](https://hijunaid.com/). More engineering work and notes are available on the [portfolio](https://hijunaid.com/) and [GitHub profile](https://github.com/Junaid-PK).
