function binarySearch(array: any[], value: any): number {
  console.log("array: ", array, "value: ", value);

  // declare "left", "right" index variables
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log("left: ", left, "right: ", right, "middle: ", middle);
    // if value > middle, then left = middle
    if (value > array[middle]) left = middle + 1;
    // else if value < middle, right = middle
    else if (value < array[middle]) right = middle - 1;
    // else retun index
    else return middle;
  }

  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3)); // 1
console.log(binarySearch([1, 3, 5, 7, 9], 2)); // -1
console.log(binarySearch([1, 3, 5, 7, 9], 10)); // -1

/* "10"
[1, 3, 5, 7, 9]
 l     m     r
  [1, 3, 5, 7, 9]
            lm  r
    [1, 3, 5, 7, 9]
                lmr
*/
