// Dynamic Object Properties

function dynamicObjectProperties() {
  const dynamicProp = 'height';
  const dynamicProps = ['test', 'bajs'];

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
}

dynamicObjectProperties();

export {};
