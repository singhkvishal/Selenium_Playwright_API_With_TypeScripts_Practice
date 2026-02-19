# TypeScript Examples

This folder contains small, focused TypeScript examples demonstrating common language features.

Files (topic-focused):
- `basic-types.ts` — index pointing to focused topic files
- `primitives.ts` — primitives, arrays, tuples, enums, unions
- `null-undefined.ts` — `null` and `undefined`
- `void-never.ts` — `void` and `never` examples
- `any-unknown.ts` — `any` vs `unknown` and narrowing
- `symbol-literal-readonly.ts` — `symbol`, literal types, `as const`, readonly arrays
- `assertions-narrowing.ts` — type assertions and union narrowing
- `arrays.ts` — focused array examples
- `tuples.ts` — tuple examples and destructuring
- `enums.ts` — numeric, string, and const enums
- `unions-intersections.ts` — union and intersection types with guards
- `type-aliases.ts` — type aliases, mapped types, and records
- `functions.ts` — typed functions, defaults, rest, overloads
- `interfaces-classes.ts` — interfaces, classes, inheritance
- `async-await.ts` — simple async/await with Promise
- `generics.ts` — generic functions and classes
 - `functions.ts` — typed functions, defaults, rest, overloads
 - `interfaces-classes.ts` — interfaces, classes, inheritance
 - `async-await.ts` — simple async/await with Promise
 - `generics.ts` — generic functions and classes

OOP Examples (in `TypeScripts_Examples/oop/`):
 - `classes-basic.ts` — basic class, readonly and static members
 - `inheritance-polymorphism.ts` — subclassing and polymorphism
 - `encapsulation-accessors.ts` — private fields and accessors
 - `interfaces-implements.ts` — implementing interfaces
 - `abstract-classes.ts` — abstract class patterns
 - `mixins-composition.ts` — mixins and composition helpers
 - `design-patterns.ts` — small Factory and Singleton examples

Quick run (recommended using `npx`):

Install lightweight dev tooling if you don't already have it:

```bash
npm install --save-dev typescript ts-node @types/node
```

Run a single example with `ts-node` (example):

```bash
npx ts-node TypeScripts_Examples/primitives.ts
```

To run all examples quickly you can run them individually, or add a small `package.json` script. Example `npx` loop (bash):

```bash
for f in TypeScripts_Examples/*.ts; do npx ts-node "$f"; done
```

Tip: `npx ts-node` is easiest for quick experimentation. Use `tsc` for production-style builds.
