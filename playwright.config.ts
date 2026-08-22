import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: 2,

  reporter: [
    ['html'],
    ['list'],
  ],

  use: {
    baseURL: 'https://www.testmuai.com/selenium-playground/',
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: true,
    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  projects: [
    // Local Chromium
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
      },
    },

    // TestMu AI - Chrome on Windows
    {
      name: 'Chrome:latest:Windows 10@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },

    // TestMu AI - Firefox on Windows
    {
      name: 'Chrome:latest:macOS Ventura@lambdatest',
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});