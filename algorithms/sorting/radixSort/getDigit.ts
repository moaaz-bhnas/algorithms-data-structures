/*
PROBLEM: Get Digit

Write a helper function called `getDigit` which accepts a non-negative integer
and a position index (0 = ones place, 1 = tens place, etc.) and returns the digit
at that position.

  getDigit(1234, 0)  // 4
  getDigit(1234, 1)  // 3
  getDigit(1234, 2)  // 2
  getDigit(1234, 5)  // 0
*/

// https://stackoverflow.com/a/41712226/7982963
export default function getDigit(number: number, index: number): number {
  return Math.floor((Math.abs(number) / Math.pow(10, index)) % 10);
}

// console.log(getDigit(1234, 0)); // 4
// console.log(getDigit(1234, 1)); // 3
