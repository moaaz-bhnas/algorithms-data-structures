import { swap } from "../bubbleSort/bubbleSort";

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
    swap(array, i, min);
  }
  // return array
  return array;
}

console.log("selectionSort");
console.log(selectionSort([4, 2, 3, 1]));

/*
[4, 2, 3, 1]

*/
