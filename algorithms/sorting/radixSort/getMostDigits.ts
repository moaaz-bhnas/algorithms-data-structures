import digitsCount from "./digitsCount";

export default function getMostDigits(numbers: number[]): number {
  const counts = numbers.map(digitsCount);
  return Math.max(...counts);
}

// console.log(getMostDigits([1, 12, 123]));
