// prototypes.js — prototypes, prototype chain, Object.create
function Person(name) { this.name = name; }
Person.prototype.greet = function() { return `Hi ${this.name}`; };

const p = new Person('Sam');
const o = Object.create(p);
console.log(p.greet(), o.greet());
