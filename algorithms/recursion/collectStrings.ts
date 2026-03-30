/*
PROBLEM: Collect Strings

Write a function called `collectStrings` which accepts an object and returns an
array of all the string values found anywhere inside it (including inside nested objects).

  collectStrings({ a: "gon", b: { c: "killua", d: { e: "hisoka" } }, f: "kurapika" })
  // ["gon", "killua", "hisoka", "kurapika"]
*/

import { ObjectType } from "./stringifyNumbers";

function collectStrings(object: ObjectType): string[] {
  let result: string[] = [];

  for (const key in object) {
    const value = object[key];

    if (typeof value === "string") {
      result.push(value);
    } else if (typeof value === "object") {
      result = result.concat(collectStrings(value));
    }
  }

  return result;
}

const object: ObjectType = {
  a: "gon",
  b: {
    c: "killua",
    d: {
      e: "hisoka",
    },
  },
  f: "kurapika",
};

console.log(collectStrings(object)); // ["gon", "killua", "hisoka", "kurapika"]
