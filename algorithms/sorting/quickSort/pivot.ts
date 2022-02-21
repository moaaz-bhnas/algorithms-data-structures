import swap from "../bubbleSort/swap";

export default function pivot(
  array: number[],
  start: number,
  end: number
): number {
  // create a variable for the pivot
  const pivot = array[start];
  // And another for the eventual index where the pivot ends
  let swapIndex = start;
  // For each other value in the array
  for (let i = start + 1; i < end; i++) {
    // if the pivot is larger than the current value, increase the swap index by 1 and swap it with the current value
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  // swap the start with swapIndex
  swap(array, start, swapIndex);
  console.log("array: ", array);
  return swapIndex;
}

/*
[3, 4, 2, 5, 1]
pivotIndex = 0; pivot = 3
swapIndex = 0

    i
[3, 4, 2, 5, 1]

       i
[3, 4, 2, 5, 1]
pivot > array[i] =>
  swapIndex = 1
  [3, 2, 4, 5, 1]

          i
[3, 2, 4, 5, 1]

             i
[3, 2, 4, 5, 1]
pivot > array[i] =>
  swapIndex = 2
  [3, 2, 1, 5, 4]
*/

// console.log(pivot([3, 4, 2, 5, 1])); // 2
