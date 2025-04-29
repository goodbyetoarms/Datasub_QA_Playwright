import { test, expect } from '@playwright/test';

test.describe('Request A Quote Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should submit form with valid data', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="subject"]', 'QA Test');
    await page.fill('textarea[name="message"]', 'This is a test message.');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Thank you')).toBeVisible();
  });

  test('should not submit empty form', async ({ page }) => {
    await page.click('button[type="submit"]');
    await expect(page.locator('text=required')).toBeVisible();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.fill('input[name="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=valid email')).toBeVisible();
  });

  test('should prevent multiple submissions', async ({ page }) => {
    await page.fill('input[name="name"]', 'Jane Doe');
    await page.fill('input[name="email"]', 'jane@example.com');
    await page.fill('input[name="subject"]', 'Quote Request');
    await page.fill('textarea[name="message"]', 'Test repeat submit.');
    const button = page.locator('button[type="submit"]');
    await button.click();
    await expect(button).toBeDisabled();
  });

  test('should submit form with only required fields filled', async ({ page }) => {
    await page.fill('input[name="name"]', 'Minimal User');
    await page.fill('input[name="email"]', 'minimal@example.com');
    await page.click('button[type="submit"]');
    await expect(page.locator('text=Thank you')).toBeVisible();
  });
});
