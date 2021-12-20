function flattenPure(array: any[]): any[] {
  let newArray: any[] = [];

  if (array.length === 0) return [];

  if (Array.isArray(array[0])) {
    return flattenPure(array[0]).concat(flattenPure(array.slice(1)));
  } else {
    newArray.push(array[0]);
  }

  newArray = newArray.concat(flattenPure(array.slice(1)));
  return newArray;
}

/*
flattenPure([[1], 2, [3]])
          [1].concat(flattenPure([2, [3]]));
*/

console.log(flattenPure([[1], 2, 3])); // [1, 2, 3]
