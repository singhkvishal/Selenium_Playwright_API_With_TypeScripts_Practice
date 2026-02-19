/**
 * functions-generics.ts — functions, overloads, generics
 * Examples mapped to tips (~13–18).
 */
export {};

// Tip 13: Use clear function types
function add(a: number, b: number): number { return a + b; }

// Tip 14: Prefer default parameters over `||` fallbacks
function greet(name = "Guest"): string { return `Hello, ${name}`; }

// Tip 15: Use generics for reusable functions
function identity<T>(x: T): T { return x; }

// Tip 16: Prefer overloads sparingly; prefer unions + narrowing
function parse(input: string): string;
function parse(input: string, asNumber: true): number;
function parse(input: string, asNumber?: boolean): number | string {
	return asNumber ? Number.parseInt(input, 10) : input;
}

// Tip 17: Use generic constraints when necessary
function pluck<T, K extends keyof T>(obj: T, key: K): T[K] { return obj[key]; }

// Tip 18: Avoid excessive generic complexity for callers
console.log(add(1,2), greet(), identity("x"), parse("10", true), pluck({a:1}, "a"));
