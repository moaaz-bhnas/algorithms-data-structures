/*
PROBLEM: Tribonacci

Write a recursive function called `tribonacci` which accepts a signature array
of 3 starting numbers and a number `n`, and returns an array of the first `n`
elements of the Tribonacci sequence. In the Tribonacci sequence, each number is
the sum of the three preceding numbers.

  tribonacci([0, 0, 1], 10)  // [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  tribonacci([1, 1, 1], 5)   // [1, 1, 1, 3, 5]
  tribonacci([0, 1, 1], 1)   // [0]
*/

function tribonacci(signature: number[], n: number): number[] {
  if (n <= 3) return signature.slice(0, n);
  const { length } = signature;
  // base case
  if (length === n) return signature;
  // change
  signature.push(
    signature[length - 1] + signature[length - 2] + signature[length - 3]
  );
  return tribonacci(signature, n);
}

console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
