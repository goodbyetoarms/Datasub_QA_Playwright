import { test, expect } from '@playwright/test';

test.describe('Request A Quote form tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qatest.datasub.com');
    await page.locator('h5:has-text("Request A Quote")').scrollIntoViewIfNeeded();
  });

  test('Happy Path — корректно заполненные поля', async ({ page }) => {
    await page.fill('#name', 'Stallone Silvestr');
    await page.fill('#email', 'stallone.silvestr@example.com');
    await page.selectOption('#service', 'B Service');
    await page.check('#purposeBusiness');
    await page.check('#withdrawCard');
    await page.fill('#message', 'Looking forward to your quote.');
    await page.click('button[type="submit"]');
    await expect(page.locator('#formStatus')).toBeVisible();
  });

  test('Negative — email не заполнен', async ({ page }) => {
    await page.fill('#name', 'Stallone Silvestr');
    await page.selectOption('#service', 'C Service');
    await page.check('#purposePersonal');
    await page.check('#withdrawCard');
    await page.fill('#message', 'No email provided');
    await page.click('button[type="submit"]');
    await expect(page.locator('#email:invalid')).toHaveCount(1);
    await expect(page.locator('#formStatus')).toBeHidden();
  });

  test('Negative — имя не заполнено', async ({ page }) => {
    await page.fill('#email', 'test@example.com');
    await page.selectOption('#service', 'D Service');
    await page.check('#purposeBusiness');
    await page.check('#withdrawCash');
    await page.check('#withdrawCrypto');
    await page.fill('#message', 'Forgot to enter name');
    await page.click('button[type="submit"]');
    await expect(page.locator('#name:invalid')).toHaveCount(1);
    await expect(page.locator('#formStatus')).toBeHidden();
  });

  test('Negative — выбраны все чекбоксы оплаты', async ({ page }) => {
    await page.fill('#name', 'Anna');
    await page.fill('#email', 'anna@example.com');
    await page.selectOption('#service', 'A Service');
    await page.check('#purposePersonal');
    await page.check('#withdrawCash');
    await page.check('#withdrawCard');
    await page.check('#withdrawCrypto');
    await page.fill('#message', 'Test multiple withdrawal options');
    await page.click('button[type="submit"]');
    // Если запрещено — добавить проверку ошибки:
    // await expect(page.locator('.withdrawal-error')).toBeVisible();
    await expect(page.locator('#formStatus')).toBeHidden();
  });

  test('Negative — не выбран Business/Personal', async ({ page }) => {
    await page.fill('#name', 'Mike');
    await page.fill('#email', 'mike@example.com');
    await page.selectOption('#service', 'C Service');
    await page.check('#withdrawCard');
    await page.fill('#message', 'Account purpose not selected');
    await page.click('button[type="submit"]');
    // Предполагаемая ошибка — добавить, если есть:
    // await expect(page.locator('.account-purpose-error')).toBeVisible();
    await expect(page.locator('#formStatus')).toBeHidden();
  });
});
