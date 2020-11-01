import * as chalk from 'chalk';

function assert(expected: any, actual: any): string {
  if (expected === actual) {
    const message = chalk.green(`${expected} === ${actual}`);
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

export {assert, filterUntil};
