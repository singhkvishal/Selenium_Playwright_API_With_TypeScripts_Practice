const {Builder, By, until} = require('selenium-webdriver');

(async function forms() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://the-internet.herokuapp.com/login');
    await driver.findElement(By.id('username')).sendKeys('tomsmith');
    await driver.findElement(By.id('password')).sendKeys('SuperSecretPassword!');
    await driver.findElement(By.css('button.radius')).click();

    await driver.wait(until.elementLocated(By.css('.flash.success')), 5000);
    let flash = await driver.findElement(By.css('.flash.success'));
    console.log('Login flash text:', await flash.getText());
  } finally {
    await driver.quit();
  }
})();