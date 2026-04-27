# Chapaiko-SDET_AI_QM_Course

UI test automation framework skeleton built with TypeScript and Playwright Test.

## Overview

This repository contains a maintainable end-to-end UI test framework based on:

- TypeScript
- Playwright Test
- Page Object Model for pages
- Component Object Model for reusable UI fragments
- ESLint with `@typescript-eslint`

The framework is structured for clarity, typed code, and reusable test building blocks.

## Project Structure

```text
.
|-- src/
|   |-- components/
|   |   |-- BaseComponent.ts
|   |   `-- HeaderComponent.ts
|   |-- constants/
|   |   `-- routes.ts
|   |-- fixtures/
|   |   `-- baseTest.ts
|   |-- pages/
|   |   |-- BasePage.ts
|   |   `-- HomePage.ts
|   |-- test-data/
|   |   `-- userData.ts
|   `-- utils/
|       |-- envHelper.ts
|       `-- logger.ts
|-- tests/
|   `-- e2e/
|       `-- home.spec.ts
|-- reports/
|-- playwright.config.ts
|-- package.json
`-- tsconfig.json
```

## Framework Design

- `BasePage` contains shared page-level behavior such as navigation and URL assertions.
- `BaseComponent` contains shared component-level behavior for reusable UI sections.
- `BaseTest` centralizes common setup and teardown hooks.
- Custom fixtures expose ready-to-use page objects and components to tests.
- Selectors are limited to Playwright's semantic locator APIs: `getByRole`, `getByLabel`, `getByTestId`.

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browser binaries:

```bash
npx playwright install chromium
```

## Configuration

The Playwright configuration is defined in `playwright.config.ts`.

- Test directory: `tests/e2e`
- Default browser project: `chromium`
- HTML report output: `reports/html`
- Test artifacts output: `test-results`
- Default base URL: `https://playwright.dev`

You can override the base URL with an environment variable:

```bash
BASE_URL=https://your-app-url npm test
```

## Available Scripts

```bash
npm run lint
npm run lint:fix
npm test
npm run test:headed
npm run test:debug
npm run test:report
```

## Example Test Flow

The sample suite in `tests/e2e/home.spec.ts` demonstrates:

- fixture-based test setup
- page object usage through `HomePage`
- component object usage through `HeaderComponent`
- basic navigation validation

## Conventions

- Classes use PascalCase.
- Methods use camelCase.
- Public classes and methods include brief JSDoc.
- Locators are wrapped in page object or component methods.
- Tests stay focused on behavior, while selectors and interaction logic live in the framework layer.

## Validation

The current scaffold has been validated with:

```bash
npx tsc --noEmit
npm run lint
npx playwright test --list
```
