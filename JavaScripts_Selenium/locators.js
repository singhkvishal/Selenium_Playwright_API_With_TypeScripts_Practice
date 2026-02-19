const {Builder, By} = require('selenium-webdriver');

(async function locators() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.wikipedia.org');

    // By id / name / css / xpath
    let searchInput = await driver.findElement(By.css('input#searchInput'));
    console.log('Found search input by css');

    let heading = await driver.findElement(By.css('div.central-textlogo'));
    console.log('Heading text snippet:', (await heading.getText()).split('\n')[0]);
  } finally {
    await driver.quit();
  }
})();