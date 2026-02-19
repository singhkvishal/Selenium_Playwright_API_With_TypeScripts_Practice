/**
 * abstract-classes.ts — abstract classes and enforced APIs
 */
export {};

abstract class Shape {
  constructor(public name: string) {}
  abstract area(): number;
  describe() { return `${this.name} area=${this.area()}`; }
}

class Circle extends Shape {
  constructor(public radius: number) { super('circle'); }
  area() { return Math.PI * this.radius ** 2; }
}

class Rectangle extends Shape {
  constructor(public w: number, public h: number) { super('rect'); }
  area() { return this.w * this.h; }
}

const shapes: Shape[] = [new Circle(2), new Rectangle(3,4)];
for (const s of shapes) console.log(s.describe());
