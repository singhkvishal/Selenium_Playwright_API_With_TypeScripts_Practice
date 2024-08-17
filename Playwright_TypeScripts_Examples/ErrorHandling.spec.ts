import test from "playwright/test";

const playwright = require('playwright');

test('Handle errors',async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com');
  try {
    // If the element is not present, Playwright will throw an error
    await page.click('#nonexistent-button');
  } catch (error) {
    console.error('An error occurred: ${error.message}');
  } finally {
    await browser.close();
  }
});