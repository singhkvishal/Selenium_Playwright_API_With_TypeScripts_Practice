// classes.js — ES6 classes, inheritance, super
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes noise`; }
}

class Dog extends Animal {
  speak() { return `${this.name} barks`; }
}

const d = new Dog('Rex');
console.log(d.speak());
