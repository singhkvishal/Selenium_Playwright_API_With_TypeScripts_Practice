const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(`
    <iframe id="f" srcdoc="<p>inside frame</p>"></iframe>
  `);
  const frame = await (await page.$('#f')).contentFrame();
  console.log('frame text:', await frame.textContent('p'));
  await browser.close();
})();
