/**
 * classes-basic.ts — basic class and static members
 */
export {};

class Person {
  constructor(public name: string, public readonly id: number) {}
  greet() { return `Hi, I'm ${this.name}`; }
  static species() { return 'Homo sapiens'; }
}

const p = new Person('Alice', 1);
console.log(p.greet(), Person.species(), p.id);
