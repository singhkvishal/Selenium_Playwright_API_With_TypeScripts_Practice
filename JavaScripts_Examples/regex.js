// regex.js — regular expressions examples
const re = /\b(\w+)\b/g;
const s = 'hello world from regex';
let m;
while ((m = re.exec(s)) !== null) {
  console.log('match', m[1]);
}
