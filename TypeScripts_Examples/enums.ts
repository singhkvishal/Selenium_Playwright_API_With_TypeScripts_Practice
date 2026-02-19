/**
 * enums.ts — numeric, string, and const enums
 */
export {};

// numeric enum
enum Direction { Up = 1, Down, Left, Right }
console.log("Direction.Up ->", Direction.Up);

// string enum
enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" }
console.log("Color.Red ->", Color.Red);

// const enum (inlines values at compile time)
// (tsconfig must allow const enums to see benefits)
const enum Role { Admin = "ADMIN", User = "USER" }
console.log("Role.User ->", Role.User);
