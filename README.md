# Loop QA Task — Playwright Data-Driven Test Suite

Automated end-to-end tests for the [Asana-style demo app](https://animated-gingersnap-8cf7f2.netlify.app/) built with **Playwright** and **TypeScript**.

## Highlights

| Practice                  | Detail                                                                                             |
| ------------------------- | -------------------------------------------------------------------------------------------------- |
| **Data-driven**           | All test scenarios are defined in `fixtures/test-data.json` — zero code changes to add a new case  |
| **Page Object Model**     | `LoginPage` and `ProjectBoardPage` encapsulate locators; actions live in tests                     |
| **Reusable login helper** | `utilities/login.ts` handles authentication, reading credentials from environment variables        |
| **Built-in locators**     | Uses `getByLabel`, `getByRole`, `getByText` — no fragile CSS/XPath selectors                       |
| **Environment variables** | Credentials and base URL loaded from `.env` via `dotenv`                                           |
| **Prettier**              | Consistent code formatting enforced via `.prettierrc.json`                                         |
| **CI-ready**              | GitHub Actions workflow runs tests on every push to `main/master`, uploads HTML report as artifact |

## Project Structure

```
├── .github/
│   └── workflows/
│       └── playwright.yml     # CI pipeline (GitHub Actions)
├── fixtures/
│   └── test-data.json         # Test case definitions (data-driven source)
├── pages/
│   ├── login.page.ts          # LoginPage — login form locators
│   └── project-board.page.ts  # ProjectBoardPage — board locators
├── tests/
│   └── demo-app.spec.ts       # Data-driven test spec
├── utilities/
│   └── login.ts               # Reusable login helper
├── .env                       # Local environment variables (git-ignored)
├── .prettierrc.json           # Prettier formatting config
├── playwright.config.ts       # Playwright configuration
└── tsconfig.json              # TypeScript configuration
```

## Environment Variables

| Variable       | Description         |
| -------------- | ------------------- |
| `BASE_URL`     | Base URL of the app |
| `APP_USERNAME` | Login username      |
| `APP_PASSWORD` | Login password      |

## Getting Started

### Prerequisites

- **Node.js** ≥ 18

### Install

```bash
npm ci
npx playwright install --with-deps chromium
```

### Run Tests

```bash
npm test              # headless (default)
npm run test:headed   # visible browser
npm run report        # open the HTML report
npm run format        # format all files with Prettier
npm run format:check  # check formatting without writing
```

## Playwright Configuration

| Setting         | Local             | CI                |
| --------------- | ----------------- | ----------------- |
| `fullyParallel` | ✅                | ✅                |
| `retries`       | 1                 | 2                 |
| `workers`       | default           | 1                 |
| `reporter`      | html              | github            |
| `trace`         | on-first-retry    | on-first-retry    |
| `screenshot`    | only-on-failure   | only-on-failure   |
| `video`         | retain-on-failure | retain-on-failure |
| `browser`       | Chromium          | Chromium          |

## Adding a New Test Case

Add an entry to [`fixtures/test-data.json`](fixtures/test-data.json):

```json
{
    "title": "Test Case 7 - New task in Some Project Some Column",
    "project": "Some Project",
    "taskName": "New task",
    "column": "Some Column",
    "tags": ["Tag1", "Tag2"]
}
```

No other file changes required.
