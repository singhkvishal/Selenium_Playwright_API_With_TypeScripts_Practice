const {Builder, By, until} = require('selenium-webdriver');

(async function alerts() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://the-internet.herokuapp.com/javascript_alerts');
    await driver.findElement(By.xpath('//button[text()="Click for JS Alert"]')).click();

    // Wait for alert and accept
    await driver.wait(until.alertIsPresent(), 5000);
    let alert = await driver.switchTo().alert();
    console.log('Alert text:', await alert.getText());
    await alert.accept();

    console.log('Alert handled');
  } finally {
    await driver.quit();
  }
})();