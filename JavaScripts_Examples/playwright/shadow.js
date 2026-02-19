const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <div id="host"></div>
    <script>
      const host = document.querySelector('#host');
      const root = host.attachShadow({ mode: 'open' });
      const p = document.createElement('p');
      p.textContent = 'shadow text';
      root.appendChild(p);
    </script>
  `);
  const shadowText = await page.$eval('#host', el => el.shadowRoot.querySelector('p').textContent);
  console.log('shadow text:', shadowText);
  await browser.close();
})();
