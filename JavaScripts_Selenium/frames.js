const {Builder, By, until} = require('selenium-webdriver');

(async function frames() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://the-internet.herokuapp.com/iframe');

    let iframe = await driver.findElement(By.id('mce_0_ifr'));
    await driver.switchTo().frame(iframe);

    let body = await driver.findElement(By.css('body'));
    console.log('Iframe text (snippet):', (await body.getText()).slice(0, 60));

    // switch back
    await driver.switchTo().defaultContent();
  } finally {
    await driver.quit();
  }
})();