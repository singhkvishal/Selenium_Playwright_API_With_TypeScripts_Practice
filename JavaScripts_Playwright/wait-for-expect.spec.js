const { test, expect } = require('@playwright/test');

test('use expect with polling to wait for condition', async ({ page }) => {
  await page.setContent(`<div id="out"></div><script>setTimeout(()=>document.getElementById('out').textContent='ready', 100);</script>`);
  await expect(page.locator('#out')).toHaveText('ready', { timeout: 2000 });
});
