/**
 * inheritance-polymorphism.ts — inheritance and polymorphism examples
 */
export {};

class Animal {
  constructor(public name: string) {}
  speak(): string { return `${this.name} makes a noise.`; }
}

class Dog extends Animal {
  speak(): string { return `${this.name} barks.`; }
}

class Cat extends Animal {
  speak(): string { return `${this.name} meows.`; }
}

const zoo: Animal[] = [new Dog('Rex'), new Cat('Mittens')];
for (const a of zoo) console.log(a.speak());
