# Selenium TypeScript Examples

Prerequisites:

- Node.js installed
- Google Chrome installed

Install dependencies (from workspace root or this folder):

```bash
npm install selenium-webdriver chromedriver ts-node typescript @types/node
```

Run an example with ts-node:

```bash
npx ts-node TypeScripts_Selenium/basics.ts
```

Or compile and run with `tsc`:

```bash
npx tsc
node dist/TypeScripts_Selenium/basics.js
```

Files added:
- `basics.ts` — Launch browser and get title
- `navigation.ts` — Back/forward/refresh
- `locators.ts` — Examples of finding elements
- `waits.ts` — Explicit/implicit waits
- `actions.ts` — Mouse and keyboard actions
- `forms.ts` — Fill and submit a form
- `alerts.ts` — Handling JS alerts
- `frames.ts` — Working with iframes
- `file-upload.ts` — Uploading a file via input[type=file]
- `screenshot.ts` — Take a screenshot and save it

Adjust file paths in `file-upload.ts` as needed for your machine.