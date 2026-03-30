/*
PROBLEM: Nested Even Sum (Loop-based)

Write a recursive function called `nestedEvenSumLoop` which returns the sum of
all even numbers in an object, including even numbers in deeply nested objects.
This time, use a for...in loop instead of manually splitting the object.

  nestedEvenSumLoop({ a: 1, b: { a: 2, b: 3, c: 4 }, c: 6 })  // 12
*/

import { isEven } from "./nestedEvenSum";

function nestedEvenSumLoop(object: { [key: string]: any }): number {
  let sum = 0;

  for (const key in object) {
    const value = object[key];

    if (typeof value === "object") {
      sum += nestedEvenSumLoop(value);
      continue;
    }

    if (typeof value === "number" && isEven(value)) {
      sum += value;
    }
  }

  return sum;
}

/*
nestedEvenSum({ a: 1, b: { a: 2, b: 3, c: 4, }, c: 6 })
*/

const object1 = {
  a: 1,
  b: {
    a: 2,
    b: 3,
    c: 4,
  },
  c: 6,
};

console.log(nestedEvenSumLoop(object1)); // 12
