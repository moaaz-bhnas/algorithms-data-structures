/* 
Quick Sort:

Big O:
- best = average: n log(n). 
- worst: n^2. Why?
- Watch https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/11072084#overview.
*/

import pivot from "./pivot";

function quickSort(
  array: number[],
  start: number = 0,
  end: number = array.length
): number[] {
  if (end - start <= 1) return; // subarray <= 1

  const pivotIndex = pivot(array, start, end);

  // left
  quickSort(array, start, pivotIndex);
  // right
  quickSort(array, pivotIndex + 1, end);

  return array;
}

// عملتها لوحدي قبل ما ابص على التنفيذ :D

/* [3, 4, 2, 5, 1]

quickSort([3, 4, 2, 5, 1], 0, 5)
start = 0, end = 5
pivotIndex = 2
[1, 2, 3, 5, 4]

  quickSort([1, 2, 3, 5, 4], 0, 2)
  start = 0, end = 2
  pivotIndex = 0
  [1, 2, 3, 5, 4]

    quickSort([1, 2, 3, 5, 4], 0, 0)
    start = 0, end = 0 => return

    quickSort([1, 2, 3, 5, 4], 1, 2)
    start = 0, end = 0 => return

  quickSort([1, 2, 3, 5, 4], 3, 5)
  start = 3, end = 5
  pivotIndex = 4
  [1, 2, 3, 4, 5]

    quickSort([1, 2, 3, 4, 5], 3, 4)
    start = 3, end = 4 => return
    
    quickSort([1, 2, 3, 4, 5], 5, 5)
    start = 5, end = 5 => return

= [1, 2, 3, 4, 5]
*/

console.log(quickSort([3, 4, 2, 5, 1])); // [1, 2, 3, 4, 5]
