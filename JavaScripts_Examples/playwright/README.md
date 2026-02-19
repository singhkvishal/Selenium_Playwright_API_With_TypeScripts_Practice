# Playwright Examples (standalone JS)

This folder contains standalone Playwright scripts (plain Node.js) demonstrating common Playwright features. They are not Playwright Test files — run them directly with Node.

Prerequisites
- Install Playwright (this will also download browsers):

```bash
npm install --save-dev playwright
npx playwright install
```

Run an example (Node):

```bash
node JavaScripts_Examples/playwright/launch.js
```

Included examples (standalone scripts):
- `launch.js` — launch Chromium and print title
- `locators.js` — use `page.locator` to read heading
- `actions.js` — fill inputs and click buttons
- `frames.js` — interact with iframe content
- `shadow.js` — query shadow DOM
- `network.js` — intercept and fulfill network requests
- `upload-download.js` — setInputFiles and download handling
- `tracing-screenshot.js` — start tracing and save a screenshot
- `contexts.js` — multiple contexts and device emulation
- `geolocation-permissions.js` — geolocation and permissions
- `video-recording.js` — record video via context `recordVideo`

Notes
- These examples use `playwright` library APIs directly. For test runner examples see the project `JavaScripts_Playwright` folder which contains Playwright Test specs.
- Some scripts write files (screenshots, videos, downloads) to the repository folder.
