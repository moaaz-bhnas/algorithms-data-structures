// https://stackoverflow.com/a/41712226/7982963
export default function getDigit(number: number, index: number): number {
  return Math.floor((number / Math.pow(10, index)) % 10);
}

console.log(getDigit(1234, 0)); // 4
console.log(getDigit(1234, 1)); // 3
