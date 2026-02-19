/**
 * interfaces-implements.ts — interfaces and `implements` examples
 */
export {};

interface Serializable {
  toJSON(): string;
}

class Point implements Serializable {
  constructor(public x: number, public y: number) {}
  toJSON() { return JSON.stringify({ x: this.x, y: this.y }); }
}

const pt = new Point(2, 3);
console.log(pt.toJSON());
