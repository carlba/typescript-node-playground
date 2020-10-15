// Dynamic Object Properties
const dynamicProp = 'height';

const person: {
  name: string;
  age: number;
  status: 'active' | 'inactive';
  [dynamicProp]: number;
} = {
  name: 'Carl',
  age: 37,
  status: 'active',
  [dynamicProp]: 183,
};

console.log(person);

export {};
