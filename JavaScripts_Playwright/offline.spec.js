const { test, expect } = require('@playwright/test');

test('simulate offline mode', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await context.setOffline(true);
  await page.setContent(`<script>fetch('/nope').catch(e=>document.body.textContent='offline')</script>`);
  await page.waitForSelector('body');
  expect(await page.textContent('body')).toContain('offline');
  await context.close();
});
