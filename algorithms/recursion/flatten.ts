/*
PROBLEM: Flatten

Write a recursive function called `flatten` which accepts an array containing
nested arrays of any depth and returns a new flat array with all values.

  flatten([1, [2, 3]])           // [1, 2, 3]
  flatten([[1], 2, [3]])         // [1, 2, 3]
  flatten([1, [[[[2]]]], 3])     // [1, 2, 3]
  flatten([[1, [2]], [3, [4]]])  // [1, 2, 3, 4]
*/

function flatten(array: any[]): any[] {
  const newArray: any[] = [];

  function recursive(array: any[]) {
    // base case
    if (array.length === 0) return;

    if (Array.isArray(array[0])) {
      recursive(array[0]);
    } else {
      newArray.push(array[0]);
    }

    // different input
    recursive(array.slice(1));
  }

  recursive(array);

  return newArray;
}

console.log(flatten([1, [2, 3]])); // [1, 2, 3]

/*
recursive([1, [2, 3]])
[1]
  recursive([[2, 3]])
    recursive([2, 3])
    [1, 2]
      recursive([3])
      [1, 2, 3]
        recursive([])
*/
