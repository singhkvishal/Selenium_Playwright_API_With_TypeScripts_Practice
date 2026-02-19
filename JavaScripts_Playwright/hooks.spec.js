const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {
  console.log('global setup before all tests');
});

test.afterAll(async () => {
  console.log('global teardown after all tests');
});

test.beforeEach(async ({ page }) => {
  await page.goto('about:blank');
});

test('example test A', async ({ page }) => {
  await page.setContent('<div>A</div>');
  expect(await page.textContent('div')).toBe('A');
});

test('example test B', async ({ page }) => {
  await page.setContent('<div>B</div>');
  expect(await page.textContent('div')).toBe('B');
});
