// Kata: https://www.codewars.com/kata/59f98052120be4abfa000304/train/javascript

function hasNonRotatableInteger(number: number): boolean {
  const regex = new RegExp("[^01689]");
  return regex.test(String(number));
}

// https://stackoverflow.com/a/51146322/7982963
function reverseNumber(number: number): number {
  let reversed = 0;

  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return reversed;
}

// https://stackoverflow.com/a/48571621/7982963
function swap6And9(number: number): number {
  return Number(
    String(number).replace(/[69]/g, ($1) => ($1 === "6" ? "9" : "6"))
  );
}

// Create a function that takes two arguments
function upsideDown(start: string, end: string): number {
  let count = 0;
  for (
    let currentNumber = Number(start);
    currentNumber <= Number(end);
    currentNumber++
  ) {
    if (
      currentNumber < 10 &&
      currentNumber !== 0 &&
      currentNumber !== 1 &&
      currentNumber !== 8
    )
      continue;
    // Now we have 0, 1, 8, and all numbers > 10

    if (hasNonRotatableInteger(currentNumber)) continue;
    // Now we have 0, 1, 8, and all numbers > 10 that don't include non-rotatable integers (e.g. 12, 23, 840, etc.)

    // reverse number
    let reversedNumber = reverseNumber(currentNumber);
    // swap 6 and 9
    reversedNumber = swap6And9(reversedNumber);
    // Check if the number is upside down
    if (currentNumber !== reversedNumber) continue;

    console.log(currentNumber);
    count++;
  }
  return count;
}

console.log(upsideDown("0", "12")); // => 4, the valid numbers are: 0, 1, 8, 11
// console.log(upsideDown("100000", "12345678900000000"));

// console.log(reverseNumber(6889));
