// functions.js — declarations, arrow functions, default params, rest/spread
function add(a, b = 0) { return a + b; }
const mul = (a, b) => a * b;

function join(separator, ...parts) { return parts.join(separator); }

console.log(add(1,2), add(3), mul(2,3), join('-', 'a','b','c'));
