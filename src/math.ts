/**
 * @param num A float or integer
 * @returns The `num` parameter rounded to the closest hundred
 */
function roundToClosestHundred(num: number) {
  return Math.round(num / 100) * 100;
}

console.log(roundToClosestHundred(49.99));
console.log(roundToClosestHundred(249));
console.log(roundToClosestHundred(101));
