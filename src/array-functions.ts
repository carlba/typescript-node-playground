import * as moment from 'moment';

interface Person {
  name: string;
  age: number;
  birthday?: string;
}

const names: Person[] = [
  {name: 'Carl', age: 37, birthday: '1983-03-04'},
  {name: 'Johanna', age: 31, birthday: '1988-07-13'},
  {name: 'Tobias', age: 27},
  {name: 'Erik', age: 27},
];

// Iterative approach
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let totalAge = 0;

for (const name of names) {
  totalAge += name.age;
}

// Functional Approach
const ageTotal = names.reduce((acc, value) => {
  acc = acc + value.age;
  return acc;
}, 0);

const onlyBelowAge30 = names.reduce((acc: Person[], value) => {
  if (value.age < 30) {
    acc.push(value);
  }
  return acc;
}, []);

const onlyBelowAge30Filter = names.filter(person => person.age < 30);

const mapAndFilter = names
  .map(person => person.name)
  .filter(name => name.toLocaleLowerCase().startsWith('c'));

// The sort method mutates the array to prevent this we need to make a copy of the
// array before sorting. The `[...names]` syntax creates a shallow copy of the array

const sortByAgeAscending = [...names].sort((a, b) => (a.age > b.age ? 1 : -1));
const sortByAgeDescending = [...names].sort((a, b) => (a.age < b.age ? 1 : -1));
const sortByNameAscending = [...names].sort((a, b) =>
  a.name.localeCompare(b.name)
);
const sortByNameDescending = [...names].sort((a, b) =>
  b.name.localeCompare(a.name)
);

const personsWithBirthday = [...names].filter(name => name.birthday);

const sortByBirthDay = [...personsWithBirthday].sort((a, b) => {
  if (a.birthday && b.birthday) {
    return moment.utc(a.birthday) > moment.utc(a.birthday) ? 1 : -1;
  } else {
    return -1;
  }
});

function compareObjectKeys(first: {}, second: {}) {
  /**
   * Returns difference between two objects
   */
  return Object.keys(first).filter(x => !Object.keys(second).includes(x));
}

console.log('Persons', names);

console.log('ageTotal', ageTotal);
console.log('onlyBelowAge30', onlyBelowAge30);
console.log('onlyBelowAge30Filter', onlyBelowAge30Filter);
console.log('mapAndFilter', mapAndFilter);

console.log('sortByAgeAscending', sortByAgeAscending);
console.log('sortByAgeDescending', sortByAgeDescending);
console.log('sortByNameAscending', sortByNameAscending);
console.log('sortByNameDescending', sortByNameDescending);

console.log('sortByBirthDay', sortByBirthDay);

console.log(
  compareObjectKeys(
    {name: 'Carl', age: 38, test: 'test', birthday: '1983-03-04'},
    {name: 'Carl', birthday: '1983-03-04'}
  )
);
