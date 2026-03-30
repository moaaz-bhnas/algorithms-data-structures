/*
PROBLEM: Swap

Write a helper function called `swap` which accepts an array and two indices,
and swaps the elements at those positions in-place (no return value needed).

  const arr = [1, 2, 3];
  swap(arr, 0, 2);
  // arr is now [3, 2, 1]
*/

export default function swap(
  array: (string | number)[],
  index1: number,
  index2: number
): void {
  const temporary = array[index1];
  array[index1] = array[index2];
  array[index2] = temporary;
}
