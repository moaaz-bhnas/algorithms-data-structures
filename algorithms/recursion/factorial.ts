/*
PROBLEM: Factorial

Write a recursive function called `factorial` which accepts a non-negative integer
and returns its factorial. The factorial of n (written n!) is the product of all
positive integers up to and including n. The factorial of 0 is defined to be 1.

  factorial(0)  // 1
  factorial(1)  // 1
  factorial(3)  // 6
  factorial(5)  // 120
*/

function factorial(number: number): number {
  // (base case): if number === 0, return 1
  if (number === 0) return 1;
  // (input change) number * factorial(number - 1)
  return number * factorial(number - 1);
}

console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
