// Kata: https://www.codewars.com/kata/59f98052120be4abfa000304/train/javascript

function hasNonRotatableInteger(number: number): boolean {
  const regex = new RegExp("[^01689]");
  return regex.test(String(number));
}

function has6or9(number: number): boolean {
  const regex = new RegExp("6|9");
  return regex.test(String(number));
}

function isPalindrome(number: number): boolean {
  const string = String(number);

  for (let i = 0; i < string.length; i++) {
    const left = string[i];
    const right = string[string.length - 1 - i];
    // console.log({ left, right });
    if (left === "6") {
      if (right === "9") continue;
      else return false;
    }
    if (left === "9") {
      if (right === "6") continue;
      else return false;
    }
    if (left !== right) return false;
  }

  return true;
}

// Create a function that takes two arguments
function upsideDown(start: string, end: string): number {
  // const nonRotatables = [2, 3, 4, ..]
  let count = 0;
  for (
    let currentNumber = Number(start);
    currentNumber <= Number(end);
    currentNumber++
  ) {
    if (hasNonRotatableInteger(currentNumber)) continue;

    if (String(currentNumber).length === 1) {
      if (!has6or9(currentNumber)) {
        console.log({ currentNumber });
        count++;
      }
      continue;
    }

    // Create a function to check 6 or 9
    // Create a function that checks if palindrome
    if (isPalindrome(currentNumber)) {
      console.log({ currentNumber });
      count++;
    }
  }
  return count;
}

// console.log(upsideDown("0", "12")); // => 4, the valid numbers are: 0, 1, 8, 11
console.log(upsideDown("100000", "12345678900000000"));

// console.log(isPalindrome(689));
