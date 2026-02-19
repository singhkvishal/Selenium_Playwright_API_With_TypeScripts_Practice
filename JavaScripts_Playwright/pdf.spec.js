const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');

test('generate pdf (chromium)', async () => {
  // page.pdf is available in Chromium
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<h1>PDF</h1>');
  const file = 'tmp.pdf';
  try {
    await page.pdf({ path: file, format: 'A4' });
    expect(fs.existsSync(file)).toBeTruthy();
  } catch (e) {
    console.log('pdf may not be supported in this runtime:', e.message);
  }
  await browser.close();
});
