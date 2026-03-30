/*
PROBLEM: Recursive Range

Write a recursive function called `recursiveRange` which accepts a positive
number and adds up all the numbers from 0 up to and including that number.

  recursiveRange(4)   // 10  (0+1+2+3+4)
  recursiveRange(6)   // 21
  recursiveRange(10)  // 55
*/

function recursiveRange(number: number): number {
  // base case
  if (number === 0) return 0;
  // input change
  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(4)); // 10
