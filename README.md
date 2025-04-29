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

| №  | Название                                             | Тип        | Описание                                               |
|----|------------------------------------------------------|------------|--------------------------------------------------------|
| 1 | `should submit form with valid data`                  | Happy Path | Проверка успешной отправки формы при корректных данных |
| 2 | `should not submit empty form`                        | Negative   | Проверка валидации при пустой форме                    |
| 3 | `should show validation error for invalid email`      | Negative   | Проверка ошибки при вводе некорректного email          |
| 4 | `should prevent multiple submissions`                 | Negative   | Проверка защиты от повторной отправки                  |
| 5 | `should submit form with only required fields filled` | Happy Path | Отправка формы с минимально необходимыми полями        |

### Требования

- Node.js >= 16
- npm >= 8
- Playwright (установится через `npm install`)
