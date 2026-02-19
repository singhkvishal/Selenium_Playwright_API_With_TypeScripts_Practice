/**
 * interop-js.ts — JS interop, `any`, `unknown`, and migration helpers
 * Examples mapped to tips (~53–57).
 */
export {};

// Tip 53: Treat JS imports as `unknown`/`any` and narrow before use
declare const importedFromJs: unknown; // simulated external value
const val: unknown = importedFromJs;
if (typeof val === "string") console.log("string len", val.length);

// Tip 54: Wrap unsafe access in thin adapters to contain unsafety
function adaptToString(v: unknown): string { return typeof v === "string" ? v : String(v ?? ''); }

console.log(adaptToString(val));
