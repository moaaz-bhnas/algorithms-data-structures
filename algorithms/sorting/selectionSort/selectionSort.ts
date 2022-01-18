import { swap } from "../bubbleSort/bubbleSort";

/* 
Bubble Sort:
- Smallest values back up to the start.
- "in every iteration of the inner loop, the smallest element is replaced with the starting element in each loop. After the end of each loop, we increment the starting position by 1 and run it till the second last element in the array." - https://www.geeksforgeeks.org/selection-sort-vs-bubble-sort/

Implementation:
- Loop, and each loop has a nested loop that starts from i
- nested loop checks all elements
- insert smallest one in place of i

Optimization:
- if i is already the smallest, don't swap

Big O:
- O(n^2): u r comparing each element to the whole rest of the array

Selection vs Bubble:
- "bubble sort operates by repeatedly swapping the adjacent elements if they are in the wrong order while the selection sort sorts an array by repeatedly finding the minimum element from the unsorted part and placing that at the beginning of the array." - https://pediaa.com/
- Selection sort is more effecient and faster (due to the many swaps I think).
*/

function selectionSort(array: (number | string)[]): (number | string)[] {
  // loop through the whole array
  for (let i = 0; i < array.length; i++) {
    // declare first element as smaller value "min"
    let min = i;
    // inside-loop through element - i
    for (let j = i + 1; j < array.length; j++) {
      // if currentElement < min, then min = current
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) swap(array, i, min); // if the element isn't in place
  }
  // return array
  return array;
}

console.log("selectionSort");
console.log(selectionSort([4, 2, 3, 1]));

/*
[4, 2, 3, 1]

*/
