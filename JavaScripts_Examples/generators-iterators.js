// generators-iterators.js — example of generator functions and iterators
function* counter(n = 3) {
  for (let i = 0; i < n; i++) yield i;
}

for (const v of counter(4)) console.log('gen', v);
