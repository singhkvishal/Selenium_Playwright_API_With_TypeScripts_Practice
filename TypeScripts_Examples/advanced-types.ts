/**
 * advanced-types.ts — mapped types, conditional types, infer
 * Examples mapped to tips (~32–40).
 */
export {};

// Tip 32: Use mapped types to transform properties
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
type Mutable<T> = { -readonly [K in keyof T]: T[K] };

// Tip 33: Conditional types for type-level logic
type Unpacked<T> = T extends (infer U)[] ? U : T;

// Tip 34: `infer` is useful inside conditional types
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

// Tip 35: Build utility types lightly before depending on external libs
type P = ReadOnly<{ x: number; y: string }>;
const pVal: P = { x: 1, y: 's' };
type M = Mutable<P>;
const mVal: M = { x: 1, y: 's' };

// Tip 36: Prefer readable names for complex types
type Element = Unpacked<number[]>;
const elem: Element = 1;

// Tip 37: Use union distributivity to your advantage
type ToArray<T> = T extends any ? T[] : never;
type A1 = ToArray<'a' | 'b'>;

console.log({ pVal, mVal, elem, a1: [] as A1 });
