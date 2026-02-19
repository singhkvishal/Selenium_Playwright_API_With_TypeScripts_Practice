// modules.js — CommonJS vs ES module examples
// CommonJS (Node)
const path = require('path');
console.log('basename', path.basename(__filename));

// Example ES module (uncomment and run with Node --experimental-modules or .mjs)
// import fs from 'fs';
// console.log('es modules example');
