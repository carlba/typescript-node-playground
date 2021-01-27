/**
 * Javascript string methods
 *
 * | Method                                                                             | Description                                                                                                                        |
 * | :--------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
 * | [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp)                       | Returns the character at the specified index (position)                                                                            |
 * | [charCodeAt()](https://www.w3schools.com/jsref/jsref_charcodeat.asp)               | Returns the Unicode of the character at the specified index                                                                        |
 * | [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp)                | Joins two or more strings, and returns a new joined strings                                                                        |
 * | [endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp)                   | Checks whether a string ends with specified string/characters                                                                      |
 * | [fromCharCode()](https://www.w3schools.com/jsref/jsref_fromcharcode.asp)           | Converts Unicode values to characters                                                                                              |
 * | [includes()](https://www.w3schools.com/jsref/jsref_includes.asp)                   | Checks whether a string contains the specified string/characters                                                                   |
 * | [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)                     | Returns the position of the first found occurrence of a specified value in a string                                                |
 * | [lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof.asp)             | Returns the position of the last found occurrence of a specified value in a string                                                 |
 * | [localeCompare()](https://www.w3schools.com/jsref/jsref_localecompare.asp)         | Compares two strings in the current locale                                                                                         |
 * | [match()](https://www.w3schools.com/jsref/jsref_match.asp)                         | Searches a string for a match against a regular expression, and returns the matches                                                |
 * | [repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp)                       | Returns a new string with a specified number of copies of an existing string                                                       |
 * | [replace()](https://www.w3schools.com/jsref/jsref_replace.asp)                     | Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced |
 * | [search()](https://www.w3schools.com/jsref/jsref_search.asp)                       | Searches a string for a specified value, or regular expression, and returns the position of the match                              |
 * | [slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp)                  | Extracts a part of a string and returns a new string                                                                               |
 * | [split()](https://www.w3schools.com/jsref/jsref_split.asp)                         | Splits a string into an array of substrings                                                                                        |
 * | [startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp)               | Checks whether a string begins with specified characters                                                                           |
 * | [substr()](https://www.w3schools.com/jsref/jsref_substr.asp)                       | Extracts the characters from a string, beginning at a specified start position, and through the specified number of character      |
 * | [substring()](https://www.w3schools.com/jsref/jsref_substring.asp)                 | Extracts the characters from a string, between two specified indices                                                               |
 * | [toLocaleLowerCase()](https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp) | Converts a string to lowercase letters, according to the host's locale                                                             |
 * | [toLocaleUpperCase()](https://www.w3schools.com/jsref/jsref_tolocaleuppercase.asp) | Converts a string to uppercase letters, according to the host's locale                                                             |
 * | [toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp)             | Converts a string to lowercase letters                                                                                             |
 * | [toString()](https://www.w3schools.com/jsref/jsref_tostring_string.asp)            | Returns the value of a String object                                                                                               |
 * | [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp)             | Converts a string to uppercase letters                                                                                             |
 * | [trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp)                    | Removes whitespace from both ends of a string                                                                                      |
 * | [valueOf()](https://www.w3schools.com/jsref/jsref_valueof_string.asp)              | Returns the primitive value of a String object                                                                                     |
 *
 * @packageDocumentation
 */

import { fstat, ReadStream } from 'fs';
import * as readLine from 'readline';
import * as fs from 'fs';
import * as path from 'path';

import { assert } from './utils';
import { Readable, Writable, Transform, Duplex } from 'stream';

/**
 * Replaces all occurrences of a string in another string
 * @param str The string to replace in
 * @param searchStr The string to search for
 * @param replaceStr The string to replace with
 *
 * This is needed since the regular Javascript `str.replace()` method only replaces the
 * first occurrence of a match.
 *
 */
function replaceAll(str: string, searchStr: string, replaceStr: string): string {
  // escape regexp special characters in search string
  const pattern = searchStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  return str.replace(new RegExp(pattern, 'gi'), replaceStr);
}

/**
 * Replaces all occurrences of `-` with `/`
 *
 * - If a regexp is not used only the first match will be replaced
 *
 * https://www.jshero.net/en/koans/replace.html
 *
 * @param str A string
 */
function normalize(str: string) {
  // return str.replace(/-/g, '/');
  return str.split('-').join('/');
}

/**
 * Return the first word of a string
 * @param str A string
 */
function firstWord(str: string) {
  return str.substr(0, str.indexOf(' '));
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

function removeLines(stream: ReadStream, num: number) {
  const outputStream = new Duplex({ read: size => true });

  const rl = readLine.createInterface({ input: stream, crlfDelay: Infinity });
  let count = 0;
  rl.on('line', line => {
    if (count < 2) {
      outputStream.push(line);
      count += 1;
    }
  });
  rl.on('end', () => outputStream.push(null));

  return outputStream;
}

console.log(assert(firstCharacterOfString('evil'), 'e'));
console.log(assert(lastCharacterOfString('evil'), 'l'));
console.log(assert(reverseStringRecursively('evil'), 'live'));
console.log(assert(reverseStringRecursively('evil'), 'live'));
console.log(assert(reverseString('evil'), 'live'));
console.log(assert(firstWord('Carl is my name'), 'Carl'));
console.log(assert(getArrayFromString('string'), ['s', 't', 'r', 'i', 'n', 'g']));
console.log(assert(normalize('20-05-2017'), '20/05/2017'));
const testStream = fs.createReadStream(path.join(__dirname, 'test.txt'));
removeLines(testStream, 3).on('data', data => console.log(data.toString()));

export {
  replaceAll,
  normalize,
  firstWord,
  firstCharacterOfString,
  lastCharacterOfString,
  getArrayFromString,
  reverseStringRecursively,
  reverseString,
  removeLines
};
