/**
 * type-narrowing.ts — type guards, discriminated unions, control-flow narrowing
 * Examples mapped to tips (~41–46).
 */
export {};

// Tip 41: Use discriminated unions for clear narrowing
type Shape = { kind: "circle", radius: number } | { kind: "rect", width: number, height: number };

function area(s: Shape): number {
  if (s.kind === "circle") return Math.PI * s.radius * s.radius;
  return s.width * s.height;
}

// Tip 42: Use type predicates for reusable guards
function isCircle(s: Shape): s is { kind: "circle", radius: number } { return s.kind === "circle"; }

// Tip 43: Leverage control-flow analysis for narrowed locals
function areaSafe(s: Shape): number {
  if (isCircle(s)) return Math.PI * s.radius ** 2;
  // here s is narrowed to rect
  return s.width * s.height;
}

console.log(area({ kind: "circle", radius: 2 }), areaSafe({ kind: "rect", width: 2, height: 3 }));
