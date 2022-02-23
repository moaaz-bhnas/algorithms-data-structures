import digitsCount from "./digitsCount";

export default function mostDigits(numbers: number[]): number {
  const counts = numbers.map(digitsCount);
  return Math.max(...counts);
}

console.log(mostDigits([1, 12, 123]));
