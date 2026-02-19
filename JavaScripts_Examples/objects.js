// objects.js — object literals, property access, destructuring, merge
const person = { name: 'Alice', age: 30, address: { city: 'NY' } };
const { name, age } = person;

const updated = { ...person, age: 31 };

console.log('name', name, 'age', age);
console.log('updated', updated);
