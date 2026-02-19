const {Builder, By, until} = require('selenium-webdriver');

(async function waits() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Implicit wait (applies to findElement)
    await driver.manage().setTimeouts({ implicit: 5000 });

    await driver.get('https://the-internet.herokuapp.com/dynamic_loading/1');
    await driver.findElement(By.css('#start button')).click();

    // Explicit wait example
    let finish = await driver.wait(until.elementLocated(By.css('#finish h4')), 10000);
    console.log('Finished text:', await finish.getText());
  } finally {
    await driver.quit();
  }
})();