/**
 * unions-intersections.ts — union and intersection types with type guards
 */
export {};

type Fish = { swim: () => void; species: string };
type Bird = { fly: () => void; species: string };

type Pet = Fish | Bird;

function move(p: Pet) {
  if ("swim" in p) {
    return `swimming ${p.species}`;
  }
  return `flying ${p.species}`;
}

type Person = { name: string };
type Employee = Person & { employeeId: number };

const e: Employee = { name: "Bob", employeeId: 123 };

console.log(move({ swim() {}, species: "trout" }), e);
