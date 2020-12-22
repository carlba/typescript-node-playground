import * as chalk from 'chalk';
import * as uuid from 'uuid';

type NumStringArray = (string | number)[];

function shallowEqual<T extends NumStringArray | string | number | boolean>(first: T, second: T) {
  if (Array.isArray(first) && Array.isArray(second)) {
    return first.length === second.length && first.every((value, index) => value === second[index]);
  } else {
    return first === second;
  }
}

function assert<T extends NumStringArray | string | number | boolean>(
  expected: T,
  actual: T,
  message?: string
): string {
  let result = message ? `${message}:` : '';
  if (shallowEqual(expected, actual)) {
    result += `${JSON.stringify(expected)} === ${JSON.stringify(actual)}`;
  } else {
    result += `${expected} !== ${actual}`;
  }
  return result;
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

export function generateUUID() {
  return uuid.v4();
}

export { assert, filterUntil };
