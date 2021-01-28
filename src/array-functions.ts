import moment from 'moment';

interface Person {
  name: string;
  age: number;
  birthday: string;
}
/**
 * A typed array of persons
 */
const persons: Person[] = [
  { name: 'Carl', age: 37, birthday: '1983-03-04' },
  { name: 'Johanna', age: 31, birthday: '1988-07-13' },
  { name: 'Tobias', age: 27, birthday: '1990-01-01' },
  { name: 'Roger', age: 70, birthday: '1950-02-22' }
];

/**
 * Calculate the total sum of people in an array iteratively
 * @param persons An array of persons
 */
function calculateTotalAgeIterative(persons: Person[]): number {
  let totalAge = 0;
  for (const name of persons) {
    totalAge += name.age;
  }
  return totalAge;
}

/**
 * Calculate the total sum of people in an array functionally
 * @param persons An array of persons
 * @returns The total sum of the people in the `persons` array
 */
function calculateTotalAgeFunctionally(persons: Person[]): number {
  const totalAge = persons.reduce((acc, value) => {
    acc = acc + value.age;
    return acc;
  }, 0);
  return totalAge;
}

/**
 * The reduce method is used to get the persons that are younger than 30
 */
const onlyBelowAge30 = persons.reduce((acc: Person[], value) => {
  if (value.age < 30) {
    acc.push(value);
  }
  return acc;
}, []);

const onlyBelowAge30Filter = persons.filter(person => person.age < 30);

const mapAndFilter = persons
  .map(person => person.name)
  .filter(name => name.toLocaleLowerCase().startsWith('c'));

/**
 * The sort method mutates the array to prevent this we need to make a copy of the
 * array before sorting. The `[...names]` syntax creates a shallow copy of the array by
 * using that instead of the original array we prevent the mutation.
 *
 * @param arr An array containing objects with a birthday
 * @return A new instance of array in `arr` sorted by birthday
 */
function sorting() {
  const sortByAgeAscending = [...persons].sort((a, b) => (a.age > b.age ? 1 : -1));
  const sortByAgeDescending = [...persons].sort((a, b) => (a.age < b.age ? 1 : -1));
  const sortByNameAscending = [...persons].sort((a, b) => a.name.localeCompare(b.name));
  const sortByNameDescending = [...persons].sort((a, b) => b.name.localeCompare(a.name));
  console.log('sortByAgeAscending', sortByAgeAscending);
  console.log('sortByAgeDescending', sortByAgeDescending);
  console.log('sortByNameAscending', sortByNameAscending);
  console.log('sortByNameDescending', sortByNameDescending);
}

interface Birthy {
  birthday: string;
}

/**
 * Sort an array with objects containing birthdays
 * @param arr An array containing objects with a birthday
 * @return A new instance of array in `arr` sorted by birthday
 */
function sortByBirthDay<T extends Birthy>(arr: T[], order: 'asc' | 'desc' = 'asc'): T[] {
  const sortByBirthDay = [...arr].sort((a, b) => {
    if (order === 'desc') {
      return moment.utc(a.birthday) > moment.utc(b.birthday) ? 1 : -1;
    } else if (order === 'asc') {
      return moment.utc(a.birthday) < moment.utc(b.birthday) ? 1 : -1;
    } else {
      return -1;
    }
  });
  return sortByBirthDay;
}

const person = { test: 'test', name: 'Carl' };
/**
 * Shows keys that exists in both `first` and `second` object
 * @param first The first object
 * @param second The second object
 */
function compareObjectKeys<T extends object, U extends Partial<T>>(
  first: T,
  second: U
): (keyof Partial<T>)[] {
  return (Object.keys(first) as (keyof T)[]).filter(
    x => !(Object.keys(second) as (keyof U)[]).includes(x)
  );
}

function range(num: number) {
  return [...Array(num).keys()];
}

function generateMatrix(size: number) {
  return range(size).map(x => range(size).map(y => `${x},${y}`));
}

/**
 * ```typescript
 * function pairwise(arr: any[]) {
 *   const pairwiseArr = [];
 *   for (let i = 0; i < arr.length; i += 2) {
 *     pairwiseArr.push([numbers[i], numbers[i + 1]]);
 *   }
 *   return pairwiseArr;
 * }
 * ```
 * @param arr An array
 */
function pairwise(arr: any[]) {
  const pairwiseArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairwiseArr.push([numbers[i], numbers[i + 1]]);
  }
  return pairwiseArr;
}

console.log('Persons', persons);
console.log('ageTotal', calculateTotalAgeFunctionally(persons));
console.log('onlyBelowAge30', onlyBelowAge30);
console.log('onlyBelowAge30Filter', onlyBelowAge30Filter);
console.log('mapAndFilter', mapAndFilter);
console.log('sortByBirthDay', sortByBirthDay(persons));

sorting();

console.log(
  'compareObjectKeys',
  compareObjectKeys(
    { 1: 'Carl', age: 38, test: 'test', birthday: '1983-03-04' },
    { name: 'Carl', birthday: '1983-03-04' }
  )
);

console.log('generateMatrix', generateMatrix(5));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('pairwise numbers', pairwise(numbers));

export { calculateTotalAgeIterative, calculateTotalAgeFunctionally, pairwise };
