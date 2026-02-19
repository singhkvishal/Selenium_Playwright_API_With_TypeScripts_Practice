// map-set-weak.js — Map, Set, WeakMap, WeakSet
const m = new Map();
m.set('a', 1);
const s = new Set([1,2,2]);

const wm = new WeakMap();
let key = {};
wm.set(key, 'meta');
key = null; // now eligible for GC

console.log('map', m.get('a'), 'set size', s.size);
