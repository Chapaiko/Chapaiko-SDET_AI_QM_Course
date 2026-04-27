// path: playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

import { EnvHelper } from './src/utils/envHelper';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'reports/html' }]
  ],
  use: {
    baseURL: EnvHelper.getString('BASE_URL', 'https://automationexercise.com'),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 15_000
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  outputDir: 'test-results'
});
