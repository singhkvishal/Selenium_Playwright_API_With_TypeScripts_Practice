// streams.js — basic readable stream example
const { Readable } = require('stream');

const r = Readable.from(['a','b','c']);
r.on('data', chunk => console.log('chunk', chunk.toString()));
