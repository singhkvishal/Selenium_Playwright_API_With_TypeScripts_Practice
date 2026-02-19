const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.route('**/api/data', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true }) }));

  await page.setContent(`
    <script>
      fetch('/api/data').then(r => r.json()).then(j => document.body.textContent = JSON.stringify(j));
    </script>
  `);

  console.log('body:', await page.textContent('body'));
  await browser.close();
})();
