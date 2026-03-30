/*
PROBLEM: Stringify Numbers

Write a function called `stringifyNumbers` which takes in an object and returns
a new object where all numeric values (including those inside nested objects) are
converted to strings. Arrays should be left as-is (do not recurse into them).

  stringifyNumbers({ a: 1, b: { c: 2 } })
  // { a: "1", b: { c: "2" } }

  stringifyNumbers({ num: 1, test: [], data: { val: 4, info: { stuff: 5, word: "hi" } } })
  // { num: "1", test: [], data: { val: "4", info: { stuff: "5", word: "hi" } } }
*/

export interface ObjectType {
  [key: string]: any;
}

function stringifyNumbers(object: ObjectType): ObjectType {
  const newObject = Object.assign({}, object);

  for (const key in object) {
    const value = newObject[key];

    if (typeof value === "number") {
      newObject[key] = value.toString();
    } else if (typeof value === "object" && !Array.isArray(value)) {
      newObject[key] = stringifyNumbers(value);
    }
  }

  return newObject;
}

const object1 = {
  a: 1,
  b: {
    c: 2,
  },
};

console.log(stringifyNumbers(object1)); // { a: "1", b: { c: "2" } }
