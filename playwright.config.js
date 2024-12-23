// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Specify the location of your tests
  testDir: './tests',

  // Use a development server
  webServer: {
    command: 'npm run start', // Command to start your app
    port: 3000,              // Port the app runs on
    timeout: 120 * 1000,     // Time to wait for the server to start (in ms)
    reuseExistingServer: !process.env.CI, // Reuse server if not in CI
  },

  // Configure projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
