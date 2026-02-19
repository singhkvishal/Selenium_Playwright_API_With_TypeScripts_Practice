const { test, expect } = require('@playwright/test');

test('accessibility: check role and name', async ({ page }) => {
  await page.setContent(`
    <button id="b">Click me</button>
  `);
  const snapshot = await page.accessibility.snapshot();
  // find a node with role 'button' and name 'Click me'
  const hasButton = (function find(nodes){
    if (!nodes) return false;
    for (const n of nodes) {
      if (n.role === 'button' && n.name === 'Click me') return true;
      if (n.children && find(n.children)) return true;
    }
    return false;
  })(snapshot.children);
  expect(hasButton).toBe(true);
});
