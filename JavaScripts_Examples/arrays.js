// arrays.js — array basics, map/filter/reduce, multi-dimensional
const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n);
const evens = nums.filter(n => n % 2 === 0);
const sum = nums.reduce((a, b) => a + b, 0);

const matrix = [[1,2],[3,4]];

console.log({ nums, squares, evens, sum, matrix });
