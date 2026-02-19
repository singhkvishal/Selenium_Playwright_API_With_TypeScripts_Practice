// primitives.js — primitive types and typeof
const str = 'hello';
const num = 42;
const bool = true;
const n = null;
let u;

console.log('string:', str, 'type:', typeof str);
console.log('number:', num, 'type:', typeof num);
console.log('boolean:', bool, 'type:', typeof bool);
console.log('null:', n, 'type:', typeof n); // historical JS quirk: typeof null === 'object'
console.log('undefined:', u, 'type:', typeof u);
