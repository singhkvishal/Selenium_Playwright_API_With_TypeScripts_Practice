const { test, expect, chromium, firefox, webkit } = require('@playwright/test');

test('multi-browser smoke (chromium/firefox/webkit)', async () => {
  const browsers = [chromium, firefox, webkit];
  for (const b of browsers) {
    const browser = await b.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    expect(await page.title()).toContain('Example');
    await browser.close();
  }
});
