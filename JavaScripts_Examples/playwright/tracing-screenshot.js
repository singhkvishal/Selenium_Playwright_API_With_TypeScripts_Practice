const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await context.tracing.start({ screenshots: true, snapshots: true });
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'playwright-example.png' });
  await context.tracing.stop({ path: 'playwright-trace.zip' });
  console.log('screenshot and trace saved');
  await browser.close();
})();
