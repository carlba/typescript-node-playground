import { match } from 'assert';
import { assert } from './utils';
/**
 * Returns the last number in a decimal number
 * @param num A number
 */
function onesDigit(num: number) {
  return num % 10;
}

/**
 * Returns true if number is even
 * @param num A number
 */
function isEven(num: number) {
  return num % 2 === 0;
}

/**
 * Returns true if number is even
 * @param num A number
 */
function isOdd(num: number) {
  return num % 2 === 1;
}
/**
 * Returns the mean of two numbers
 *
 * @param num1 Number
 * @param num2 Number
 */
function mean(num1: number, num2: number) {
  return (num1 + num2) / 2;
}

/**
 * Returns the hypotenuse of two numbers
 *
 * Returns the midrange  of 3 numbers. The midrange is the mean of the smallest and largest number.
 * https://www.jshero.net/en/koans/minmax.html
 *
 * @param num1 Number
 * @param num2 Number
 * @param num3 Number
 */
function midrange(...args: number[]) {
  return mean(Math.max(...args), Math.min(...args));
}

/**
 * Returns the hypotenuse of two numbers
 *
 * Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two
 * legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the
 * lengths of the two legs and c is the length of the hypotenuse,
 * the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
 *
 * @param num1 Number
 * @param num2 Number
 */
function hypotenuse(num1: number, num2: number) {
  return Math.sqrt(Math.pow(num1, 2) + Math.pow(num2, 2));
}

/**
 * Returns the area of a circle.
 *
 * The area of a circle can be calculated, like so:
 * `radius * radius * PI`
 *
 * @param radius The radius of a circle
 */
function areaOfCircle(radius: number) {
  return radius * radius * Math.PI;
}

/**
 * https://www.jshero.net/en/koans/round.html
 * @param num A float or integer
 * @returns The `num` parameter rounded to the closest hundred
 */
function roundToClosestHundred(num: number) {
  return Math.round(num / 100) * 100;
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function dice() {
  return Math.floor(Math.random() * 6) + 1;
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
  console.log(assert(onesDigit(2764), 4));

  // Modulo
  console.log(54321 % 4);
  console.log(54321 % 100);
  console.log(54321 % 1000);
  console.log(assert(isEven(4), true));
  console.log(assert(isOdd(1), true));

  // Mean and Median
  console.log(assert(mean(10, 5), 7.5));
  console.log(assert(median([1, 5, 10, 20]), 7.5));
  console.log(assert(median([100000, 222, 1000, 10, 60]), 222));

  // Geometry
  console.log(assert(hypotenuse(3, 4), 5));
  console.log(assert(midrange(3, 9, 1), 5));

  // PI
  console.log(assert(areaOfCircle(2), 4 * Math.PI));

  // GCD
  console.log(assert(gcd(100, 96), 4));

  // Prime
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  const nonPrimeNumbers = [0, 1, 4, 6, 8, 9];
  primeNumbers.forEach(primeNumber =>
    console.log(assert(isPrime(primeNumber), true, `${primeNumber} is prime number`))
  );
  nonPrimeNumbers.forEach(nonPrimeNumber =>
    console.log(assert(isPrime(nonPrimeNumber), false, `${nonPrimeNumber} is not prime number`))
  );

  // Matrix
  const arrayOfNumbersArray: number[][] = [
    [1, 5, 10],
    [2, 5, 5],
    [5, 5, 3]
  ];
  console.log(sumMatrix(arrayOfNumbersArray));
  console.log(assert(max(1, 10, 5), 10));

  // Random
  console.log(randomInt(2, 6));
  console.log(randomInt(2, 6));
  console.log(randomInt(2, 6));
  console.log(randomInt(2, 6));
}
