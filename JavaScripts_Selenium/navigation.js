const {Builder} = require('selenium-webdriver');

(async function navigation() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://example.com');
    await driver.get('https://www.wikipedia.org');
    await driver.navigate().back();
    await driver.navigate().forward();
    await driver.navigate().refresh();
    console.log('Navigation sequence completed');
  } finally {
    await driver.quit();
  }
})();