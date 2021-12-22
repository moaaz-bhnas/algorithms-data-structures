interface ObjectType {
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

const object2: ObjectType = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(object1)); // { a: "1", b: { c: "2" } }
console.log(stringifyNumbers(object2));
