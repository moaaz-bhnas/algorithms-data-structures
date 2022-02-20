/* 
Merge Sort:

Big O:
- best = average = worst: n log(n). Why?
- Watch "merge sort big o complexity" video.
*/

import merge from "./merge";

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));
  return merge(left, right);
}

/*
mergeSort([4, 3, 2, 1])
middle = 2

left = mergeSort([4, 3])
  middle = 1
  left = mergeSort([4]) = [4]
  right = mergeSort([3]) = [3]
  = merge([4], [3]) = [3, 4]

right = mergeSort([2, 1])
  middle = 1
  left = mergeSort([2]) = [2]
  right = mergeSort([1]) = [1]
  = merge([2], [1]) = [1, 2]

= merge([3, 4], [1, 2]) = [1, 2, 3, 4]
*/

/*
mergeSort([8, 7, 6, 5, 4, 3, 2, 1])
middle = 4
left = mergeSort([8, 7, 6, 5])
  middle = 2
  left = mergeSort([8, 7])
    middle = 1
    left = mergeSort([8]) = [8]
    right = mergeSort([7]) = [7]
    = merge ([8], [7]) = [7, 8]
  right = mergeSort([6, 5])
    middle = 1
    left = mergeSort([6]) = [6]
    right = mergeSort([5]) = [5]
    = merge([6], [5]) = [5, 6]
  = merge([7, 8], [5, 6]) = [5, 6, 7, 8]
right = ...
*/

console.log(mergeSort([4, 3, 2, 1]));
