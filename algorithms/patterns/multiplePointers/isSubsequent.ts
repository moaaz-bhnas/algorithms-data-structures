function isSubsequent(string1: string, string2: string): boolean {
  // create 2 pointers: one (i) for string1, and the other (j) for string2
  let i = 0;
  // loop over string2 (condition: one of the strings is exausted)
  for (let j = 0; j < string2.length; j++) {
    // if: string2[j] === string1[i] ? if: i === last index? return true : i++
    if (string2[j] === string1[i]) {
      if (i === string1.length - 1) return true;
      else i++;
    }
  }
  // return false
  return false;
}

//       i
//  "moaaz", "member: moaaz ahmed"
//                        j

console.log(isSubsequent("moaaz", "moaaz ahmed")); // true
console.log(isSubsequent("abc", "atgbokc")); // true
console.log(isSubsequent("abc", "acb")); // false
