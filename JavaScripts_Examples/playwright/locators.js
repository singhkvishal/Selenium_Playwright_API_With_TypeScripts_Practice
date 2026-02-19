const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const heading = page.locator('h1');
  console.log('heading text:', await heading.textContent());
  await browser.close();
})();
