import axios from 'axios';

axios.interceptors.response.use(response => response.data);

async function getCommentsForPosts() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/posts/2/comments'
  ];

  const results = await Promise.allSettled(urls.map(url => axios.get(url)));
  const joinedResult = results.flatMap(result =>
    result.status === 'fulfilled' ? result.value : []
  );
  return joinedResult;
}

const todos = getCommentsForPosts();

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
].flat();

console.log(numbers);

console.log(todos);
