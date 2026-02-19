// promises-async-await.js — promises and async/await
function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function demo() {
  const a = await delay(100, 'a');
  const b = await delay(50, 'b');
  return a + b;
}

demo().then(r => console.log('result', r));
