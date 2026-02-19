/**
 * type-aliases.ts — type aliases, literal types, and simple mapped example
 */
export {};

type ID = string | number;
type Callback<T> = (v: T) => void;

type Point = { x: number; y: number };
const origin: Point = { x: 0, y: 0 };

type ReadOnlyPoint = Readonly<Point>;
const roOrigin: ReadOnlyPoint = { x: 0, y: 0 };

type Keys = "x" | "y";
type PointRecord = Record<Keys, number>;
const pr: PointRecord = { x: 1, y: 2 };

console.log({ ID: "abc", origin, roOrigin, pr });
