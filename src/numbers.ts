import { assert } from './utils';

/**
 * Converts a temperature in Celsius to Fahrenheit
 *
 * https://en.wikipedia.org/wiki/Fahrenheit
 * https://www.jshero.net/en/koans/fahrenheit.html
 *
 * @param num Temperature in celsius
 */
function celsiusToFahrenheit(num: number) {
  return num * (9 / 5) + 32;
}

/**
 * Converts a temperature in Fahrenheit to Celsius
 *
 * https://en.wikipedia.org/wiki/Fahrenheit
 * https://www.jshero.net/en/koans/fahrenheit.html
 *
 * @param num Temperature in Fahrenheit
 */
function fahrenheitToCelsius(num: number) {
  return (num - 32) * (9 / 5);
}

console.log(assert(celsiusToFahrenheit(0), 32));
console.log(assert(fahrenheitToCelsius(32), 0));

export { celsiusToFahrenheit };
