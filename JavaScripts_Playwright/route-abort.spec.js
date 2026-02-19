const { test, expect } = require('@playwright/test');

test('route abort example', async ({ page }) => {
  await page.route('**/will-abort', route => route.abort());
  await page.setContent(`<script>fetch('/will-abort').catch(()=>document.body.textContent='aborted')</script>`);
  await page.waitForFunction(() => document.body.textContent.length > 0);
  expect(await page.textContent('body')).toContain('aborted');
});
