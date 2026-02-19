const {Builder, By, Key} = require('selenium-webdriver');

(async function actionsExample() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.w3schools.com/howto/howto_css_dropdown.asp');

    // Hover example (move to element)
    let menu = await driver.findElement(By.css('.dropdown'));
    await driver.actions({ bridge: true }).move({ origin: menu }).perform();

    // Keyboard example: focus and send keys
    let body = await driver.findElement(By.css('body'));
    await body.sendKeys(Key.TAB, Key.TAB);

    console.log('Performed basic actions (hover + keys)');
  } finally {
    await driver.quit();
  }
})();