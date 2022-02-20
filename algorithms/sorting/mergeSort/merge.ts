/* merge
Time Complexity:
O(n+m) 
*/

export default function merge(array1: number[], array2: number[]): number[] {
  // Create an empty array
  let mergedArray = [];
  // Start at the beginning of both arrays with
  let i = 0;
  let j = 0;
  // while there are still value not checked
  while (i < array1.length && j < array2.length) {
    // if the value in the 1st array < value in the 2nd, push it into the empty array, and go to the next value in the 1st array
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    }
    // else, push the value in the 2nd array, and move to the next value in the 2nd array
    else if (array1[i] > array2[j]) {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  // if an array don't hit the end, push all its remaining values into the resulting array
  if (i < array1.length) {
    mergedArray = mergedArray.concat(array1.slice(i));
  }
  if (j < array2.length) {
    mergedArray = mergedArray.concat(array2.slice(j));
  }
  return mergedArray;
}

/*
       i             j
[1, 3, 7], [2, 4, 6, 9, 10]
[1, 2, 3, 4, 6, 7]
*/

console.log(merge([1, 3, 7], [2, 4, 6, 9, 10]));
