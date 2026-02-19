# Selenium JavaScript Examples

Prerequisites:

- Node.js installed
- Google Chrome installed

Install dependencies (from workspace root or this folder):

```bash
npm install selenium-webdriver chromedriver
```

Notes:
- Some systems may require setting up the ChromeDriver binary path or ensuring `chromedriver` is installed globally.
- Examples use async/await and the `selenium-webdriver` API.

Run an example:

```bash
node basics.js
```

Files added:
- `basics.js` — Launch browser and get title
- `navigation.js` — Back/forward/refresh
- `locators.js` — Examples of finding elements
- `waits.js` — Implicit and explicit waits
- `actions.js` — Mouse and keyboard actions
- `forms.js` — Fill and submit a form (the-internet.herokuapp.com)
- `alerts.js` — Handling JS alerts
- `frames.js` — Working with iframes
- `file-upload.js` — Uploading a file via input[type=file]
- `screenshot.js` — Take a screenshot and save it

Adjust paths in `file-upload.js` and examples as needed for your machine.