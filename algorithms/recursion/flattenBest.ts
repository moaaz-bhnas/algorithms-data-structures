function flattenB(oldArray: any[]): any[] {
  let newArray: any[] = [];

  for (let i = 0; i < oldArray.length; i++) {
    if (Array.isArray(oldArray[i])) {
      newArray = newArray.concat(flattenB(oldArray[i]));
    } else {
      newArray.push(oldArray[i]);
    }
  }

  return newArray;
}

console.log(flattenB([1, [2, 3]])); // [1, 2, 3]

/*
flattenB([1, [[[[2]]]], 3])
[1].concat(flattenB([[[[2]]]]));
                [].flattenB([[[2]]])
                        [].flattenB([[2]])
                                [].flattenB([2])
                                        [2]
*/
