const {Builder} = require('selenium-webdriver');
const fs = require('fs');
const path = require('path');

(async function screenshot() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://example.com');
    let image = await driver.takeScreenshot();
    const outPath = path.join(__dirname, 'example-screenshot.png');
    fs.writeFileSync(outPath, image, 'base64');
    console.log('Screenshot saved to', outPath);
  } finally {
    await driver.quit();
  }
})();