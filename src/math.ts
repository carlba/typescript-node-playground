import { assert } from './utils';

/**
 * @param num A float or integer
 * @returns The `num` parameter rounded to the closest hundred
 */
function roundToClosestHundred(num: number) {
  return Math.round(num / 100) * 100;
}

/**
 * Calculate the median of an array of numbers
 * @param arr An array of numbers
 */
function median(arr: number[]): number {
  const mid = Math.floor(arr.length / 2);
  const values = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
}

function gcd(a: number, b: number) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a > b) {
    [b, a] = [a, b];
  }
  while (true) {
    if (b == 0) return a;
    a = a % b;
    if (a == 0) return b;
    b = b % a;
    console.log(a, b);
  }
}

/**
 * Calculate the median of an array of numbers
 * @param arr An array of numbers
 */
function isPrime(num: number) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

/**
 * Calculate the sum of a matrix of numbers
 * @param arr A matrix of numbers
 */
function sumMatrix(arr: number[][]): number {
  const sum = arr.reduce((acc, innerArr) => {
    innerArr.forEach(value => (acc += value));
    return acc;
  }, 0);
  return sum;
}

/**
 * Calculates the maximum number of the supplied arguments
 *
 * @param nums A variable amount of arguments of numbers
 */
function max(...nums: number[]): number {
  return nums.reduce((acc, num) => (num > acc ? num : acc), 0);
}

/**
 * Gets the first integer in a string
 *
 * @param str A string that possibly contains integers
 * @returns The first integer in the string or null if no matches
 */
function numInstr(str: string): number | null {
  const matches = str.match(/-?\d+/g);
  return matches && matches.length > 0 ? +matches[0] : null;
}

if (!module.parent) {
  console.log(assert(roundToClosestHundred(49.99), 0));
  console.log(assert(roundToClosestHundred(249), 200));
  console.log(assert(roundToClosestHundred(101), 100));
  console.log(assert(median([1, 5, 10, 20]), 7.5));
  console.log(assert(median([100000, 222, 1000, 10, 60]), 222));
  console.log(assert(gcd(100, 96), 4));
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const nonPrimeNumbers = [0, 1, 4, 6, 8, 9];
  primeNumbers.forEach(primeNumber => console.log(assert(isPrime(primeNumber), true)));
  nonPrimeNumbers.forEach(nonPrimeNumber => console.log(assert(isPrime(nonPrimeNumber), false)));

  const arrayOfNumbersArray: number[][] = [
    [1, 5, 10],
    [2, 5, 5],
    [5, 5, 3]
  ];
  console.log(sumMatrix(arrayOfNumbersArray));

  console.log(max(1, 10, 5));

  console.log(numInstr('testar -15 20 test'));
  console.log('test');
}
