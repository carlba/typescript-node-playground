import lodash from 'lodash';

const person = { name: 'Carl', age: 37 };
console.log(lodash.omit(person, ['age']));

export {};
