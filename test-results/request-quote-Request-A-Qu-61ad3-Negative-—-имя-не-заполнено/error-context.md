# Test info

- Name: Request A Quote form tests >> Negative — имя не заполнено
- Location: C:\Users\user\Documents\GitHub\Datasub_QA_Playwright\tests\request-quote.spec.ts:32:7

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)

Locator: locator('#name:invalid')
Expected: 1
Received: 0
Call log:
  - expect.toHaveCount with timeout 5000ms
  - waiting for locator('#name:invalid')
    9 × locator resolved to 0 elements
      - unexpected value "0"

    at C:\Users\user\Documents\GitHub\Datasub_QA_Playwright\tests\request-quote.spec.ts:40:49
```

# Page snapshot

```yaml
- text:  123 Street, New York, USA 
- link "+012 345 6789":
  - /url: tel:0123456789
- text: 
- link "info@example.com":
  - /url: mailto:test@example.com
- link "":
  - /url: ""
- link "":
  - /url: ""
- link "":
  - /url: ""
- link "":
  - /url: ""
- link "":
  - /url: ""
- navigation:
  - link " Startup":
    - /url: index.html
    - heading " Startup" [level=1]
  - link "Home":
    - /url: index.html
  - link "About":
    - /url: about.html
  - link "Quote":
    - /url: quote.html
  - link "Contact":
    - /url: contact.html
- img "Image"
- heading "Innovation & Focused" [level=5]
- heading "Driven by Innovation, Powered by Passion" [level=1]
- link "Free Quote":
  - /url: quote.html
- link "Contact Us":
  - /url: contact.html
- button "Previous"
- button "Next"
- text: 
- heading "Happy Clients" [level=5]
- heading "236" [level=1]
- text: 
- heading "Projects Done" [level=5]
- heading "226" [level=1]
- text: 
- heading "Win Awards" [level=5]
- heading "184" [level=1]
- heading "Pricing Plans" [level=5]
- heading "We are Offering Competitive Prices for Our Clients" [level=1]
- heading "Basic Plan" [level=4]
- text: For Small Size Business
- heading "$49.00/ Month" [level=1]
- text: HTML5 & CSS3  Bootstrap v5  Responsive Layout  Cross-browser Support 
- link "Order Now":
  - /url: contact.html
- heading "Standard Plan" [level=4]
- text: For Medium Size Business
- heading "$99.00/ Month" [level=1]
- text: HTML5 & CSS3  Bootstrap v5  Responsive Layout  Cross-browser Support 
- link "Order Now":
  - /url: contact.html
- heading "Advanced Plan" [level=4]
- text: For Large Size Business
- heading "$149.00/ Month" [level=1]
- text: HTML5 & CSS3  Bootstrap v5  Responsive Layout  Cross-browser Support 
- link "Order Now":
  - /url: quote.html
- heading "Request A Quote" [level=5]
- heading "Need A Free Quote? Please Feel Free to Contact Us" [level=1]
- heading " Reply within 24 hours" [level=5]
- heading " 24 hrs telephone support" [level=5]
- paragraph: Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
- text: 
- heading "Call to ask any question" [level=5]
- heading "+012 345 6789" [level=4]:
  - link "+012 345 6789":
    - /url: tel:+012
- textbox "Your Name"
- textbox "Your Email": test@example.com
- combobox:
  - option "Select A Service"
  - option "Select B Service"
  - option "Select C Service"
  - option "Select D Service" [selected]
- text: "Account Purpose:"
- radio "Business" [checked]
- text: Business
- radio "Personal"
- text: "Personal Withdrawal Options:"
- checkbox "Cash" [checked]
- text: Cash
- checkbox "Card"
- text: Card
- checkbox "Cryptocurrency" [checked]
- text: Cryptocurrency
- textbox "Message": Forgot to enter name
- button "Request A Quote"
- heading "Testimonial" [level=5]
- heading "What Our Clients Say About Our Digital Services" [level=1]
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- img
- heading "Client Name" [level=4]
- text: Profession Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
- paragraph: © All Rights Reserved 2025.
- link "":
  - /url: blockwhy
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test.describe('Request A Quote form tests', () => {
   4 |   test.beforeEach(async ({ page }) => {
   5 |     await page.goto('https://qatest.datasub.com');
   6 |     await page.locator('h5:has-text("Request A Quote")').scrollIntoViewIfNeeded();
   7 |   });
   8 |
   9 |   test('Happy Path — корректно заполненные поля', async ({ page }) => {
  10 |     await page.fill('#name', 'John Doe');
  11 |     await page.fill('#email', 'john.doe@example.com');
  12 |     await page.selectOption('#service', 'B Service');
  13 |     await page.check('#purposeBusiness');
  14 |     await page.check('#withdrawCash');
  15 |     await page.check('#withdrawCard');
  16 |     await page.fill('#message', 'Looking forward to your quote.');
  17 |     await page.click('button[type="submit"]');
  18 |     await expect(page.locator('#formStatus')).toBeVisible();
  19 |   });
  20 |
  21 |   test('Negative — email не заполнен', async ({ page }) => {
  22 |     await page.fill('#name', 'John Doe');
  23 |     await page.selectOption('#service', 'C Service');
  24 |     await page.check('#purposePersonal');
  25 |     await page.check('#withdrawCard');
  26 |     await page.fill('#message', 'No email provided');
  27 |     await page.click('button[type="submit"]');
  28 |     await expect(page.locator('#email:invalid')).toHaveCount(1);
  29 |     await expect(page.locator('#formStatus')).toBeHidden();
  30 |   });
  31 |
  32 |   test('Negative — имя не заполнено', async ({ page }) => {
  33 |     await page.fill('#email', 'test@example.com');
  34 |     await page.selectOption('#service', 'D Service');
  35 |     await page.check('#purposeBusiness');
  36 |     await page.check('#withdrawCash');
  37 |     await page.check('#withdrawCrypto');
  38 |     await page.fill('#message', 'Forgot to enter name');
  39 |     await page.click('button[type="submit"]');
> 40 |     await expect(page.locator('#name:invalid')).toHaveCount(1);
     |                                                 ^ Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)
  41 |     await expect(page.locator('#formStatus')).toBeHidden();
  42 |   });
  43 |
  44 |   test('Negative — выбраны все чекбоксы оплаты', async ({ page }) => {
  45 |     await page.fill('#name', 'Anna');
  46 |     await page.fill('#email', 'anna@example.com');
  47 |     await page.selectOption('#service', 'A Service');
  48 |     await page.check('#purposePersonal');
  49 |     await page.check('#withdrawCash');
  50 |     await page.check('#withdrawCard');
  51 |     await page.check('#withdrawCrypto');
  52 |     await page.fill('#message', 'Test multiple withdrawal options');
  53 |     await page.click('button[type="submit"]');
  54 |     // Если запрещено — добавить проверку ошибки:
  55 |     // await expect(page.locator('.withdrawal-error')).toBeVisible();
  56 |     await expect(page.locator('#formStatus')).toBeHidden();
  57 |   });
  58 |
  59 |   test('Negative — не выбран Business/Personal', async ({ page }) => {
  60 |     await page.fill('#name', 'Mike');
  61 |     await page.fill('#email', 'mike@example.com');
  62 |     await page.selectOption('#service', 'C Service');
  63 |     await page.check('#withdrawCard');
  64 |     await page.fill('#message', 'Account purpose not selected');
  65 |     await page.click('button[type="submit"]');
  66 |     // Предполагаемая ошибка — добавить, если есть:
  67 |     // await expect(page.locator('.account-purpose-error')).toBeVisible();
  68 |     await expect(page.locator('#formStatus')).toBeHidden();
  69 |   });
  70 | });
  71 |
```