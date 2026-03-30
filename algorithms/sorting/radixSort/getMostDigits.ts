/*
PROBLEM: Get Most Digits

Write a helper function called `getMostDigits` which accepts an array of numbers
and returns the highest digit count among them.

  getMostDigits([1, 12, 123])      // 3
  getMostDigits([1, 1, 11111111])  // 8
  getMostDigits([12, 34, 56, 78])  // 2
*/

import digitsCount from "./digitsCount";

export default function getMostDigits(numbers: number[]): number {
  const counts = numbers.map(digitsCount);
  return Math.max(...counts);
}

// console.log(getMostDigits([1, 12, 123]));
