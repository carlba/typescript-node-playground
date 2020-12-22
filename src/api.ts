import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as faker from 'faker';

const accountIds = [
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid(),
  faker.random.uuid()
];

console.log(faker.random.arrayElement(accountIds));

const delay = (): Promise<void> =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 1000);
  });

async function generateSampleData(uri: string) {
  try {
    const result = await axios.post(
      `${uri}/amount`,
      { amount: 10, account_id: faker.random.arrayElement(accountIds) },
      { headers: { 'transaction-id': faker.random.uuid() } }
    );
    console.log({ data: result.data, status: result.status });
  } catch (error) {
    console.log('Error', error);
  }
}

async function sendMany() {
  for (let i = 0; i < 100000; i++) {
    console.log(`The ${i} request`);
    generateSampleData('http://localhost:3031');

    console.log('test');
  }
}

sendMany();
