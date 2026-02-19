/**
 * objects-interfaces.ts — interfaces, structural typing, optional and readonly properties
 * Examples mapped to tips (~19–25).
 */
export {};

// Tip 19: Prefer interfaces for public shapes
interface Person { readonly id: number; name: string; age?: number }
const alice: Person = { id: 1, name: "Alice" };

// Tip 20: Structural typing — assignable by shape
const plain: { id: number; name: string; extra?: boolean } = { id: 2, name: "Bob", extra: true };
const p: Person = plain; // allowed because shape matches

// Tip 21: Use optional properties for partial values
function setAge(person: Person, age?: number): void { (person as Person).age = age; }

// Tip 22: Use readonly to prevent accidental mutation
// alice.id = 3; // error when uncommented

// Tip 23: Prefer discriminated unions for variant objects
type Shape = { kind: "circle", r: number } | { kind: "square", s: number };

console.log({ alice, p });
