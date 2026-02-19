const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <input id="name" />
    <button id="btn">Click</button>
    <div id="out"></div>
    <script>
      document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('out').textContent = document.getElementById('name').value;
      });
    </script>
  `);

  await page.fill('#name', 'Playwright');
  await page.click('#btn');
  console.log('output:', await page.textContent('#out'));
  await browser.close();
})();
