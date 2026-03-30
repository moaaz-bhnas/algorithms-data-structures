/*
PROBLEM: Product of Array

Write a recursive function called `productOfArray` which takes in an array of
numbers and returns the product of them all.

  productOfArray([1, 2, 3])     // 6
  productOfArray([1, 2, 3, 10]) // 60
*/

function productOfArray(array: number[]): number {
  // (base case): if array.length === 0, return 0
  if (array.length === 0) return 1;
  // (input change) array[0] + productOfArray(array.slice(1))
  return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
