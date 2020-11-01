import { lookupService } from "dns";
import { assert } from "./utils";


function firstCharacterOfString(str: string) {
  return str.charAt(0);
}

function lastCharacterOfString(str: string) {
  return str.charAt(str.length-1);
}


function reverseString(str: string): any {
  console.log(str)
  if (str=== "") {
    return ""
  } else {
    return reverseString(str.substr(1)) + str[0]
  }   
}


console.log(assert(reverseString('evil'), 'live'))

console.log(assert(firstCharacterOfString('evil'), 'e'))
console.log(assert(lastCharacterOfString('evil'), 'l'))

console.log('live'[3])
console.log('live'.substr(1)+'live'[0])
console.log('test')


