const space = ' ';
const vowels = 'aeiouyåäö';
const firstString = 'Jag heter Johanna';
let newString = '';
for (const character of firstString) {
  if (vowels.includes(character.toLowerCase()) || character === space) {
    newString += character;
  } else {
    newString += character + 'o' + character.toLowerCase();
  }
}
console.log(newString);
