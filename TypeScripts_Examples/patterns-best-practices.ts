/**
 * patterns-best-practices.ts — API design, readonly, immutability, ergonomics
 * Examples mapped to tips (~58–62).
 */
export {};

// Tip 58: Prefer `readonly` for public API shapes
type Point = { readonly x: number; readonly y: number };
function movePoint(p: Point, dx: number, dy: number): Point {
  return { x: p.x + dx, y: p.y + dy };
}

// Tip 59: Return new values (immutability) rather than mutating inputs
const p: Point = { x: 0, y: 0 };

// Tip 60: Keep ergonomics for callers: small, focused helpers
function translate(p: Point, dx = 0, dy = 0): Point { return movePoint(p, dx, dy); }

// Tip 61: Prefer narrow public surface (small module API)
// Tip 62: Document non-obvious invariants in types and comments

console.log(translate(p, 1, 2));
