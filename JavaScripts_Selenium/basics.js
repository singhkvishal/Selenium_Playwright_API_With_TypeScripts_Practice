const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function basics() {
  const options = new chrome.Options().addArguments(
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu'
  );
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  try {
    await driver.get('https://example.com');
    console.log('Title:', await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();