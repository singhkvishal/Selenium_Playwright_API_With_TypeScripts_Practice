const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  // incognito context
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  await page1.goto('https://example.com');
  console.log('context1 title', await page1.title());

  // mobile emulation using a device descriptor
  const iPhone = devices['iPhone 12'];
  const context2 = await browser.newContext({ ...iPhone });
  const page2 = await context2.newPage();
  await page2.goto('https://example.com');
  console.log('mobile user agent contains iPhone?', (await page2.userAgent()).includes('iPhone'));

  await browser.close();
})();
