/**
 * Prints exactly the same thing that is passed in as the first argument.
 * @param obj Anything
 */
function printer(obj: any) {
  console.log(obj);
}

/**
 * Returns exactly the same thing that is passed in as the first argument.
 * @param obj Anything
 */
function returner<T>(obj: T): T {
  return obj;
}
/**
 * The doer function is a higher order function that accepts a function and an argument
 * as arguments. It will then execute the function with the passed in argument, like so:
 * `func(argument)`
 *
 * @param func Any function
 * @param argument Argument to be passed to the function in the `func argument`
 */
function doer<T, U>(func: (arg0: U) => T, argument: U) {
  return func(argument);
}

console.log(doer(returner, 'test'));
