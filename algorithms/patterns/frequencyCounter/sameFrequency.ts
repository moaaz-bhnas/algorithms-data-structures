import { buildFrequencyCounter } from "./validAnagram";

function sameFrequency(number1: number, number2: number): boolean {
  const string1 = String(number1);
  const string2 = String(number2);

  // check equality
  if (string1.length !== string2.length) return false;

  // make frequency counter for one string
  const frequencyCounter = buildFrequencyCounter(string1);

  // loop over the 2nd one subtracting it from the 1st
  for (const digit of string2) {
    if (!frequencyCounter[digit]) {
      return false;
    } else {
      frequencyCounter[digit]--;
    }
  }

  return true;
}

console.log("sameFrequency");
console.log(sameFrequency(123, 321)); // true
console.log(sameFrequency(123, 322)); // false
console.log(sameFrequency(123, 32)); // false
