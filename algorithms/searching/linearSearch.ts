/*
PROBLEM: Linear Search

Write a function called `linearSearch` which accepts an array and a value, and
returns the index of the first occurrence of that value in the array. If the value
is not found, return -1. Do not use indexOf, includes, find, or findIndex.

  linearSearch([1, 2, 3], 2)         // 1
  linearSearch([1, 2, 3], 4)         // -1
  linearSearch(["a", "b", "c"], "c") // 2

Constraints:
- Time complexity: O(n)
*/

function linearSearch(array: any[], value: any): number {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3], 4)); // 1
