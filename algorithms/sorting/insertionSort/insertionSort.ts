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
