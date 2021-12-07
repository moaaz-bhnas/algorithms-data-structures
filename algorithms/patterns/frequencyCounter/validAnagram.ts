// type vs interface: https://stackoverflow.com/a/65948871/7982963

interface FrequencyCounter {
  [key: string]: number;
}

function buildFrequencyCounter(string: string): FrequencyCounter {
  const frequencyCounter: FrequencyCounter = {};

  for (const letter of string) {
    frequencyCounter[letter] = frequencyCounter[letter]
      ? frequencyCounter[letter] + 1
      : 1;
  }

  return frequencyCounter;
}

function validAnagram(string1: string, string2: string): boolean {
  // check lengths equality
  if (string1.length !== string2.length) return false;

  // create a frequency counter for 1st string
  const frequencyCounter1 = buildFrequencyCounter(string1);

  // create a frequency counter for 2nd string
  const frequencyCounter2 = buildFrequencyCounter(string2);

  // compare their values
  for (const letter in frequencyCounter1) {
    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
      return false;
    }
  }

  return true;
}

// console.log(validAnagram("use", "sue")); // true
// console.log(validAnagram("use", "usa")); // false
// console.log(validAnagram("use", "")); // false

function validAnagramBySubtraction(string1: string, string2: string): boolean {
  // check lengths equality
  if (string1.length !== string2.length) return false;

  // create a frequency counter for one of the strings
  const frequencyCounter = buildFrequencyCounter(string1); // {u: 1, s: 1, e: 1}

  // loop through the other one subtracting it from the FC
  for (const letter of string2) {
    // s, u, e
    if (!frequencyCounter[letter]) {
      return false;
    } else {
      frequencyCounter[letter]--;
    }
  }

  return true;
}

console.log(validAnagramBySubtraction("use", "sue")); // true
console.log(validAnagramBySubtraction("use", "usa")); // false
console.log(validAnagramBySubtraction("use", "")); // false
