# Datasub QA Playwright Project

Автоматические тесты для формы "Request A Quote" на сайте https://qatest.datasub.com/, написанные с использованием Playwright.

###  Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите все тесты в headless-режиме:

```bash
npm test
```

3. Для запуска в режиме с интерфейсом (headed):

```bash
npm run test:headed
```

###  Описание тестов

В файле `request-quote.spec.ts` реализовано 5 автотестов:

Happy Path — корректно заполненные поля
Проверяет успешную отправку формы при заполнении всех полей.

Negative — email не заполнен
Проверяет, что без email форма не отправляется, и отображается ошибка.

Negative — имя не заполнено
Проверяет, что без имени форма не проходит валидацию.

Negative — выбраны все чекбоксы оплаты
Проверяет логику ограничений при выборе всех способов вывода средств (если предполагается ограничение).

Negative — не выбран Business/Personal
Тест проверяет, что при незаполненном типе аккаунта форма не проходит.|

### Требования

- Node.js >= 16
- npm >= 8
- Playwright (установится через `npm install`)
