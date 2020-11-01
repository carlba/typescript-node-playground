import { assert } from './utils';

/**
 * Return the length of a string
 * @param str A string
 */
function lengthOfString(str: string): number {
  return str.length;
}

/**
 * Return the first character of a string
 * @param str A string
 */
function firstCharacterOfString(str: string) {
  return str.charAt(0);
}

/**
 * Return the last character of a string
 * @param str A string
 */
function lastCharacterOfString(str: string) {
  return str.charAt(str.length - 1);
}

/**
 * Convert a string into an array
 * @param str
 */
function getArrayFromString(str: string): string[] {
  return Array.from(str);
}

/**
 * Reversers a string recursively.
 *
 * https://www.jshero.net/en/koans/recursion.html
 *
 * @param str A string
 */
function reverseStringRecursively(str: string): string {
  if (str === '' || str.length === 1) {
    return str;
  } else {
    return reverseStringRecursively(str.substr(1)) + str[0];
  }
}

/**
 * Reversers a string
 * @param str A string
 */
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(assert(reverseStringRecursively('evil'), 'live'));
console.log(assert(reverseString('evil'), 'live'));

console.log(assert(firstCharacterOfString('evil'), 'e'));
console.log(assert(lastCharacterOfString('evil'), 'l'));
