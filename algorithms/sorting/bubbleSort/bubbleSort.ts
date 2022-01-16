/* 
Bubble Sort:
- Largest values bubble up to the top.

Implementation:
- Loop, compare current & next values.
- If current > next, swap
- repeat

Optimization:
- If nothing was swapped in last iteration, break out of the loop.
- As this means the rest of the array is sorted.

Big O:
- If the list is already sorted, O(n).
- As it requires only one iteration to realize that there are no swaps.
*/

function swap(
  array: (string | number)[],
  index1: number,
  index2: number
): void {
  const temporary = array[index1];
  array[index1] = array[index2];
  array[index2] = temporary;
  console.log("array: ", array);
}

function bubbleSort(array: (string | number)[]): (string | number)[] {
  // loop through array
  for (let i = 1; i < array.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < array.length - i; j++) {
      console.log("i: ", i, "j: ", j);
      // if current element > next element, then swap
      if (array[j] > array[j + 1]) {
        noSwaps = false;
        swap(array, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// console.log(bubbleSort([4, 2, 3, 1])); // [1, 2, 3, 4]
console.log(bubbleSort([2, 1, 3, 4, 5, 6, 7])); // [1, 2, 3, 4]
