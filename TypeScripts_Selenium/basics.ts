import { Builder } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';

(async function basics() {
  const options = new chrome.Options().addArguments(
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-gpu'
  );
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options as any).build();
  try {
    await driver.get('https://example.com');
    console.log('Title:', await driver.getTitle());
  } finally {
    await driver.quit();
  }
})();