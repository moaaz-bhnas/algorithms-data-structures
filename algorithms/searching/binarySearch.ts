/*
PROBLEM: Binary Search

Write a function called `binarySearch` which accepts a sorted array and a value,
and returns the index of the value if found. If not found, return -1.
Use the divide-and-conquer approach — do NOT scan the array linearly.

  binarySearch([1, 3, 5, 7, 9], 3)   // 1
  binarySearch([1, 3, 5, 7, 9], 2)   // -1
  binarySearch([1, 3, 5, 7, 9], 10)  // -1

Constraints:
- Time complexity: O(log n)
- The input array is always sorted.
*/

function binarySearch(array: any[], value: any): number {
  console.log("array: ", array, "value: ", value);

  // declare "left", "right" index variables
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log("left: ", left, "right: ", right, "middle: ", middle);
    // if value > middle, then left = middle
    if (value > array[middle]) left = middle + 1;
    // else if value < middle, right = middle
    else if (value < array[middle]) right = middle - 1;
    // else retun index
    else return middle;
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3)); // 1
console.log(binarySearch([1, 3, 5, 7, 9], 2)); // -1
console.log(binarySearch([1, 3, 5, 7, 9], 10)); // -1

/* "3"
[1, 3, 5, 7, 9]
 l     m     r

[1, 3, 5, 7, 9]
lm  r

[1, 3, 5, 7, 9]
   lmr
*/

/* "10"
[1, 3, 5, 7, 9]
 l     m     r

[1, 3, 5, 7, 9]
         lm  r

[1, 3, 5, 7, 9]
             mr l
*/
