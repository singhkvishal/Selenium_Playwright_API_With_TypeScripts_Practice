const { test, expect } = require('@playwright/test');

test('storage state save and restore', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setContent(`<script>localStorage.setItem('k','v')</script>`);
  // storageState() includes localStorage and cookies
  const stateFile = 'tmp-storage.json';
  await context.storageState({ path: stateFile });
  await context.close();

  const ctx2 = await browser.newContext({ storageState: stateFile });
  const p2 = await ctx2.newPage();
  const val = await p2.evaluate(() => localStorage.getItem('k'));
  expect(val).toBe('v');
  await ctx2.close();
});
