const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('screenshot saved and non-empty', async ({ page }) => {
  await page.setContent('<div style="width:100px;height:40px;background:green"></div>');
  const file = path.join(__dirname, 'tmp-screenshot.png');
  await page.screenshot({ path: file });
  const stat = fs.statSync(file);
  expect(stat.size).toBeGreaterThan(0);
});
