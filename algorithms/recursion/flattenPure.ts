function flattenPure(oldArray: any[]): any[] {
  let newArray: any[] = [];

  if (oldArray.length === 0) return [];

  if (Array.isArray(oldArray[0])) {
    return flattenPure(oldArray[0]).concat(flattenPure(oldArray.slice(1)));
  } else {
    newArray.push(oldArray[0]);
  }

  newArray = newArray.concat(flattenPure(oldArray.slice(1)));
  return newArray;
}

/*
flattenPure([[1], 2, [3]])
          [1].concat(flattenPure([2, [3]]));
*/

console.log(flattenPure([[1], 2, 3])); // [1, 2, 3]
