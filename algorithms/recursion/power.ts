/*
PROBLEM: Power

Write a recursive function called `power` which accepts a base and an exponent
and returns the value of the base raised to the power of the exponent.
Do not use Math.pow().

  power(2, 0)  // 1
  power(2, 1)  // 2
  power(2, 2)  // 4
  power(3, 3)  // 27
*/

function power(base: number, exponent: number): number {
  // (base case): if exponent === 0, return 1
  if (exponent === 0) return 1;
  // return base * power(base, exponent-1)
  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
