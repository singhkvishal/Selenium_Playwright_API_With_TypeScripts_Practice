# JavaScript Examples

This folder contains practical JavaScript examples you can run with Node.js. Files are small, focused, and demonstrate a single concept.

Run a single example:

```bash
node JavaScripts_Examples/primitives.js
```

Run all Node examples (bash):

```bash
for f in JavaScripts_Examples/*.js; do node "$f"; done
```

Files included (high-level):
- primitives.js — primitive types and typeof
- arrays.js — map/filter/reduce, matrix
- objects.js — object literals, destructuring, spread
- functions.js — functions, defaults, rest/spread
- closures.js — closure factory example
- prototypes.js — prototype chain and Object.create
- classes.js — ES6 classes and inheritance
- promises-async-await.js — Promise and async/await
- event-loop.js — microtasks vs macrotasks
- modules.js — CommonJS vs ES modules notes
- fs-sync-async.js — Node fs sync & async examples
- http-server.js — tiny HTTP server
- streams.js — stream example
- regex.js — regular expressions
- map-set-weak.js — Map, Set, WeakMap, WeakSet
- errors.js — custom Error, try/catch
- timers.js — setTimeout/setInterval
- generators-iterators.js — generator functions
- dom-basics.js — browser DOM examples (notes)
- fetch-api.js — using fetch (Node 18+ or browser)

- playwright/ — standalone Playwright scripts (launch, locators, actions, frames, shadow DOM, network, upload/download, tracing, contexts, geolocation, video)

If you'd like, I can:
- add `npm` scripts to run categories (node/io/net/browser), or
- convert selected examples into Jest tests or Playwright scripts.
