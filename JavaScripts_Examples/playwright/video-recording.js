const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ recordVideo: { dir: path.join(__dirname, 'videos') } });
  const page = await context.newPage();
  await page.goto('https://example.com');
  await page.waitForTimeout(500);
  await context.close();
  console.log('video saved to videos/');
  await browser.close();
})();
