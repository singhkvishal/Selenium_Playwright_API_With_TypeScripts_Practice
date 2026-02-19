/**
 * arrays.ts — Array examples: element types, readonly arrays, multi-dimensional, generics
 */
export {};

// simple arrays
const nums: number[] = [1, 2, 3];
const strs: Array<string> = ["a", "b", "c"];

// readonly arrays (immutable view)
const ro: ReadonlyArray<number> = [1, 2, 3];

// multi-dimensional arrays
const matrix: number[][] = [[1,2],[3,4]];

// modifying a copy
const doubled = nums.map(n => n * 2);

// array-like tuples
function first<T>(arr: T[]): T | undefined { return arr[0]; }

console.log({ nums, strs, ro, matrix, doubled, firstNum: first(nums) });
