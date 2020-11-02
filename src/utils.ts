import * as chalk from 'chalk';

type NumStringArray = (string | number)[];

function shallowEqual<T extends NumStringArray | string | number>(first: T, second: T) {
  if (Array.isArray(first) && Array.isArray(second)) {
    return first.length === second.length && first.every((value, index) => value === second[index]);
  } else {
    return first === second;
  }
}

function assert<T extends NumStringArray | string | number>(expected: T, actual: T): string {
  if (shallowEqual(expected, actual)) {
    const message = chalk.green(`${JSON.stringify(expected)} === ${JSON.stringify(actual)}`);
    return message;
  } else {
    const message = chalk.red(`${expected} !== ${actual}`);
    console.log(message);
    return message; // throw new Error(message);
  }
}

function filterUntil<K>(
  arr: K[],
  callBackFn: (arg0: K, index: number) => boolean,
  untilCallbackFn: (arg0: K[]) => boolean
) {
  const matches: K[] = [];
  for (const [index, value] of arr.entries()) {
    if (callBackFn(value, index)) {
      if (untilCallbackFn(matches)) {
        matches.push(value);
      } else {
        break;
      }
    }
  }
  return matches;
}

export { assert, filterUntil };
