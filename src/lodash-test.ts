import * as lodash from 'lodash';

const names = ['Carl', 'Johanna', 'Tobias'];

const flattenedNames = lodash.flatMap(names, name => {
  return [name, 'Lennart'];
});

console.log(flattenedNames);

const person = {name: 'Carl', age: 37};

console.log(lodash.omit(person, ['age']));
