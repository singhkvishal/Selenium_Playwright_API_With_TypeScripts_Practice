// fs-sync-async.js — simple Node fs examples
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'tmp.txt');

// sync write/read
fs.writeFileSync(file, 'hello');
console.log('sync read:', fs.readFileSync(file, 'utf8'));

// async write/read
fs.writeFile(file, 'async hello', err => {
  if (err) throw err;
  fs.readFile(file, 'utf8', (err2, data) => {
    if (err2) throw err2;
    console.log('async read:', data);
  });
});
