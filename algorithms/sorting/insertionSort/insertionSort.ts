/* 
Bubble Sort:
- insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration - https://www.programiz.com/dsa/insertion-sort

Implementation:
- outer loop that starts from 2nd element (i = 1) that's responsible of inserting the element (array[i]) at its right place.
- nested loop that only continues if current element is larger than its previous (need to be sorted) which at each iteration gives (as long as the condition matches) gives the element (array[i]) space for its right position.

Big O:
- O(n^2): u r comparing each element to the whole rest of the array
*/

function insertionSort(array: (string | number)[]): (string | number)[] {
  // a loop that starts from 2nd element that is responsble for inserting each element in its right place
  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    // a nested loop that keeps giving space for the current element's right position
    for (var j = i - 1; j >= 0 && array[j] > currentElement; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentElement;
  }
  return array;
}

console.log("insertionSort");
console.log(insertionSort([4, 2, 3, 1])); // [1, 2, 3, 4]

/*
[4, 2, 3, 1]
1st iteration:
(nested loop): [4, 4, 3, 1]
[2, 4, 3, 1]

2nd iteration:
(nested loop): [2, 4, 4, 1]
[2, 3, 4, 1]

3rd iteration:
(nested loop): [2, 3, 4, 4]
               [2, 3, 3, 4]
               [2, 2, 3, 4]
[1, 2, 3, 4]
*/
