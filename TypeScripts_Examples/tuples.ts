/**
 * tuples.ts — Tuple examples, rest in tuples, destructuring
 */
export {};

// basic tuple
const person: [string, number] = ["Alice", 30];
const [pName, pAge] = person; // destructuring

// readonly tuple
const coords: readonly [number, number] = [10, 20];

// tuple with rest
type StringPair = [string, ...string[]];
const words: StringPair = ["hello", "world", "!"];

console.log({ person, pName, pAge, coords, words });
