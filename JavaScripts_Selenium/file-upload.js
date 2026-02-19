const {Builder, By, until} = require('selenium-webdriver');
const path = require('path');

(async function upload() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://the-internet.herokuapp.com/upload');

    // Replace with an actual file path on your machine
    const fileToUpload = path.resolve(__dirname, '..', 'package.json');

    let input = await driver.findElement(By.id('file-upload'));
    await input.sendKeys(fileToUpload);
    await driver.findElement(By.id('file-submit')).click();

    await driver.wait(until.elementLocated(By.css('h3')), 5000);
    console.log('Upload page heading:', await driver.findElement(By.css('h3')).getText());
  } finally {
    await driver.quit();
  }
})();