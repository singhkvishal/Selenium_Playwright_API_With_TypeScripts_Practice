/**
 * modules-tooling.ts — module patterns, declaration files, and compiler options notes
 * Examples mapped to tips (~47–52).
 */
export {};

// Tip 47: Prefer named exports for multiple exports
export const foo = 1;
export function bar() { return "bar"; }

// Tip 48: Use `export default` when a module mainly exports one thing
export default function baz() { return "baz"; }

// Tip 49: Keep `tsconfig.json` tuned for your target (examples not enforced here)
// Tip 50: Use declaration (`.d.ts`) files for library surface (not shown inline)

console.log(foo, bar(), baz());
