const { test, expect } = require('@playwright/test');

test.describe.parallel('parallel group', () => {
  test('p1', async ({ page }) => {
    await page.setContent('<div>p1</div>');
    expect(await page.textContent('div')).toBe('p1');
  });

  test('p2', async ({ page }) => {
    await page.setContent('<div>p2</div>');
    expect(await page.textContent('div')).toBe('p2');
  });
});
