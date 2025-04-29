import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://qatest.datasub.com',
    headless: true
  },
  testDir: './tests',
});
