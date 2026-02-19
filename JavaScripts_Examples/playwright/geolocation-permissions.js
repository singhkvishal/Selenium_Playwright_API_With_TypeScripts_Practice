const { chromium, devices } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    permissions: ['geolocation'],
    geolocation: { latitude: 37.7749, longitude: -122.4194 },
    locale: 'en-US'
  });
  const page = await context.newPage();
  await page.setContent(`<script>navigator.geolocation.getCurrentPosition(p=>document.body.textContent=JSON.stringify({lat:p.coords.latitude,lng:p.coords.longitude}))</script>`);
  // wait for body to be populated
  await page.waitForFunction(() => document.body.textContent.length > 0);
  console.log('geo:', await page.textContent('body'));
  await browser.close();
})();
