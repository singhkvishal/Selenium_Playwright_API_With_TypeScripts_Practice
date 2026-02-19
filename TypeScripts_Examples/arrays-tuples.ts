/**
 * arrays-tuples.ts — arrays, readonly arrays, tuples
 * Examples mapped to tips (~7–12) from "Effective TypeScript".
 */
export {};

// Tip 7: Prefer typed arrays over `any[]`
const nums: readonly number[] = [1, 2, 3];

// Tip 8: Use `ReadonlyArray` when you don't want mutation
const ro: ReadonlyArray<number> = nums;

// Tip 9: Tuples for fixed-length heterogenous arrays
type Pair = readonly [string, number];
const p: Pair = ["age", 30];

// Tip 10: Destructure tuples for clarity
const [label, value] = p;

// Tip 11: Use rest in tuples and variadic tuple types for flexible APIs
type StringPair = [string, ...string[]];
const words: StringPair = ["hello", "world"];

// Tip 12: Provide helper generics for array operations
function head<T>(arr: readonly T[]): T | undefined { return arr[0]; }

console.log({ nums, ro, p, label, value, words, head: head(nums) });
