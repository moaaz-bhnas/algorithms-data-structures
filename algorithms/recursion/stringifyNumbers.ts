interface ObjectType {
  [key: string]: any;
}

function stringifyNumbers(object: ObjectType): ObjectType {
  for (const key in object) {
    const value = object[key];

    switch (typeof value) {
      case "number":
        object[key] = value.toString();
        break;
      case "object":
        stringifyNumbers(value);
        break;
    }
  }

  return object;
}

const object1 = {
  a: 1,
  b: {
    c: 2,
  },
};

console.log(stringifyNumbers(object1)); // { a: "1", b: { c: "2" } }
