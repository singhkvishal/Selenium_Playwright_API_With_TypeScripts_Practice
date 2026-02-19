# TypeScript Study Path — sequential topics and examples

This study guide lists a recommended, sequential path to learn TypeScript using the example files in this folder. Each step includes the learning goal, suggested exercises, and related example files already present in the repository.

Prerequisites
- Basic JavaScript knowledge (ES6+): `let/const`, arrow functions, promises
- Node.js + npm installed for running examples with `ts-node`

Study sequence

1. Basics: Primitives & Type Syntax (30–60m)
   - Goal: Understand `string`, `number`, `boolean`, unions, type aliases
   - Exercises: read `types-basic.ts`, call `formatId`, experiment with literal types
   - Files: `types-basic.ts`, `primitives.ts`

2. Arrays & Tuples (30–45m)
   - Goal: Typed arrays, `ReadonlyArray`, tuples, variadic tuples, destructuring
   - Exercises: convert mutable arrays to `readonly`, create tuple types
   - Files: `arrays-tuples.ts`, `arrays.ts`, `tuples.ts`

3. Functions & Generics (45–75m)
   - Goal: Function signatures, defaults, overloads, generics, constraints
   - Exercises: write a generic `pluck`/`map` and add overloads where needed
   - Files: `functions-generics.ts`, `functions.ts`, `generics.ts`

4. Objects, Interfaces & Type Composition (45–60m)
   - Goal: `interface` vs `type`, optional/readonly props, structural typing
   - Exercises: model an API response with optional fields and a discriminated union
   - Files: `objects-interfaces.ts`, `interfaces-classes.ts`, `type-aliases.ts`

5. Classes & OOP Patterns (60–90m)
   - Goal: Classes, inheritance, encapsulation, abstract classes, mixins
   - Exercises: implement a small class hierarchy and a mixin, test private fields
   - Files: `oop/classes-basic.ts`, `oop/inheritance-polymorphism.ts`, `oop/encapsulation-accessors.ts`, `oop/abstract-classes.ts`, `oop/mixins-composition.ts`, `oop/design-patterns.ts`

6. Enums, Unions & Intersections (30–45m)
   - Goal: When to use enums vs union types; intersection composition
   - Exercises: replace an enum with a union + literal types and compare ergonomics
   - Files: `enums.ts`, `unions-intersections.ts`

7. Advanced Types (60–90m)
   - Goal: Mapped types, conditional types, `infer`, utility types (`Readonly`, `Partial`, `Record`)
   - Exercises: create a mapped `DeepReadonly` type and a conditional `Unpacked<T>` type
   - Files: `advanced-types.ts`, `type-aliases.ts`

8. Type Narrowing & Guards (45–60m)
   - Goal: Discriminated unions, user-defined type guards, control-flow analysis
   - Exercises: implement reliable guards and avoid `as` casts when possible
   - Files: `type-narrowing.ts`, `assertions-narrowing.ts`

9. Modules, Tooling & Compiler Options (30–60m)
   - Goal: Module export patterns, `tsconfig.json` basics, declaration files (`.d.ts`)
   - Exercises: add a small `tsconfig` change to target `ES2020` and observe `BigInt` support
   - Files: `modules-tooling.ts`, `effective-ts-MAPPING.md`, `README.md`

10. Interop with JavaScript (30–45m)
    - Goal: Handling `any`/`unknown`, thin adapters, gradual typing
    - Exercises: wrap a simulated JS import with an adapter and validate inputs
    - Files: `interop-js.ts`

11. Patterns & Best Practices (ongoing)
    - Goal: Prefer immutability (`readonly`), small APIs, documentation, ergonomic types
    - Exercises: refactor an example to be immutable and add doc comments
    - Files: `patterns-best-practices.ts`, `effective-ts-MAPPING.md`

How to run an example

1. Install dev tooling (one-time):

```bash
npm install --save-dev typescript ts-node @types/node
```

2. Run a single example with `ts-node` (example):

```bash
npx ts-node TypeScripts_Examples/primitives.ts
```

3. Run all examples quickly (bash):

```bash
for f in TypeScripts_Examples/*.ts TypeScripts_Examples/oop/*.ts; do npx ts-node "$f"; done
```

Suggested pacing and checkpoints
- Spend 30–90 minutes per major topic, practice by editing the example files.
- After finishing Advanced Types and Narrowing, attempt a small project (1–2 days): model a small API surface with types and tests.

References
- `TypeScripts_Examples/effective-ts-MAPPING.md` — mapping of Effective TypeScript tips to the topic files
- `TypeScripts_Examples/README.md` — quick run instructions

If you'd like, I can:
- annotate each example with the exact Effective TypeScript tip number and rationale, or
- add `npm` scripts to `package.json` to run specific topic groups.
