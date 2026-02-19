// fetch-api.js — using fetch in modern Node or browser
// Node 18+ has global fetch; in older Node install node-fetch
async function getJson(url) {
  const res = await fetch(url);
  return res.json();
}

if (typeof fetch !== 'undefined') {
  getJson('https://jsonplaceholder.typicode.com/todos/1').then(x => console.log('fetched', x)).catch(() => console.log('fetch failed (network)'));
} else {
  console.log('fetch not available in this runtime');
}
