export function isEven(number: number): boolean {
  return number % 2 === 0;
}

function nestedEvenSum(object: { [key: string]: any }): number {
  // base case
  const keys = Object.keys(object);
  if (keys.length === 0) return 0;

  // different input
  const value1 = object[keys[0]];
  const newObject = Object.assign({}, object);
  delete newObject[keys[0]];

  if (typeof value1 === "object") {
    return nestedEvenSum(value1) + nestedEvenSum(newObject);
  }

  if (typeof value1 === "number" && isEven(value1)) {
    return value1 + nestedEvenSum(newObject);
  } else {
    return nestedEvenSum(newObject);
  }
}

/*
nestedEvenSum({ a: 1, b: { a: 2, b: 3, c: 4, }, c: 6 })
  nestedEvenSum({ b: { a: 2, b: 3, c: 4, }, c: 6 })
    6 + nestedEvenSum({c: 6})
          6
*/

const object1 = {
  a: 1,
  b: {
    a: 2,
    b: 3,
    c: 4,
  },
  c: 6,
};

console.log(nestedEvenSum(object1)); // 12
