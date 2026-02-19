/**
 * types-basic.ts — primitives, unions, intersections, literal types
 * Examples mapped to tips (1–6) from "Effective TypeScript".
 */
export {};

// Tip 1: Prefer `string`/`number` to `any` for primitives
type ID = string | number;
const name: string = "TypeScript";

// Tip 2: Use literal types to constrain values
type Direction = "up" | "down" | "left" | "right";
const d: Direction = "up";

// Tip 3: Prefer union types over `any` for unknown alternatives
type A = { a: number };
type B = { b: string };
type U = A | B;

function handle(u: U): number | number {
  if ("a" in u) return u.a;
  return u.b.length;
}

// Tip 4: Use intersection types to compose objects
type I = A & B;
const both: I = { a: 1, b: "x" };

// Tip 5: Prefer type aliases for unions and simple compositions
type NameOrID = string | ID;

// Tip 6: Keep primitives narrow when possible
function formatId(id: ID): string { return typeof id === "number" ? `#${id}` : id.toUpperCase(); }

console.log({ name, d, handle: handle({ a: 1 }), both, formatId: formatId("abc") });
