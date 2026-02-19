const base = require('@playwright/test');
const { test: baseTest, expect } = base;

// create a custom fixture that provides a timestamp
const test = baseTest.extend({
  timestamp: async ({}, use) => {
    const ts = Date.now();
    await use(ts);
  }
});

test('custom fixture example', async ({ page, timestamp }) => {
  await page.setContent(`<div>${timestamp}</div>`);
  expect(await page.textContent('div')).toBe(String(timestamp));
});
