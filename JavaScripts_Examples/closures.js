// closures.js — closure examples and factory
function makeCounter() {
  let count = 0;
  return { inc() { return ++count; }, get() { return count; } };
}

const c = makeCounter();
console.log(c.inc(), c.inc(), c.get());
