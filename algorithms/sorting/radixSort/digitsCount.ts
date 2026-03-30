/*
PROBLEM: Digits Count

Write a helper function called `digitsCount` which accepts a non-negative integer
and returns the number of digits it has.

  digitsCount(1)     // 1
  digitsCount(25)    // 2
  digitsCount(314)   // 3
  digitsCount(0)     // 1
*/

// https://stackoverflow.com/a/28203456/7982963

export default function digitsCount(number: number): number {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}
