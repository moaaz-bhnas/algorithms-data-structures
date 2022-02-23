// https://stackoverflow.com/a/28203456/7982963

export default function digitsCount(number: number): number {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}
