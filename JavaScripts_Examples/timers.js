// timers.js — setTimeout, setInterval, clearInterval
const id = setTimeout(() => console.log('timeout fired'), 100);
let i = 0;
const intId = setInterval(() => {
  i += 1;
  console.log('interval', i);
  if (i >= 2) clearInterval(intId);
}, 50);
