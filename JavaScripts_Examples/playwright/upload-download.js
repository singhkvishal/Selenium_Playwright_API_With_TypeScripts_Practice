const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const tmp = path.join(__dirname, 'tmp-upload.txt');
  fs.writeFileSync(tmp, 'upload content');

  await page.setContent(`<input id="f" type="file" />`);
  await page.setInputFiles('#f', tmp);
  const name = await page.$eval('#f', el => el.files[0].name);
  console.log('uploaded file name:', name);

  // download example
  await page.setContent(`<a id="d" href="data:text/plain,hello" download="hello.txt">dl</a>`);
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#d'),
  ]);
  console.log('download filename:', download.suggestedFilename());

  await browser.close();
})();
