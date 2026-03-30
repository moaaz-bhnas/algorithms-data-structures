/*
PROBLEM: Some Recursive

Write a recursive function called `someRecursive` which accepts an array and a
callback function. The function should return true if a single value in the array
returns true when passed to the callback, and false otherwise (similar to Array.prototype.some).

  someRecursive([1, 2, 3, 4], isOdd)  // true
  someRecursive([2, 4, 6, 8], isOdd)  // false
  someRecursive([4, 6, 8], val => val > 10)  // false
*/

function someRecursive(array: any[], callback: Function): boolean {
  // base case
  if (array.length === 0) return false;

  if (callback(array[0])) return true;

  // different input
  return someRecursive(array.slice(1), callback);
}

const isOdd = (val: number) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
