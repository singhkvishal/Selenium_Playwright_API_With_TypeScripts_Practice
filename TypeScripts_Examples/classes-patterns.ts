/**
 * classes-patterns.ts — class usage patterns and visibility
 * Examples mapped to tips (~26–31).
 */
export {};

// Tip 26: Keep classes small and prefer composition
class User {
  constructor(public readonly id: number, public name: string) {}
  protected secret() { return "shh"; }
}

// Tip 27: Use `protected`/`private` to limit surface
class Admin extends User {
  promote() { return `${this.name} is promoted`; }
}

// Tip 28: Prefer factory/static creation for invariants
class UserFactory {
  static create(name: string) { return new User(Date.now(), name); }
}

console.log(new Admin(1, "Bob").promote(), UserFactory.create("Carol"));
