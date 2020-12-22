import { from, interval, of } from 'rxjs';
import {
  map,
  switchMap,
  take,
  tap,
  flatMap,
  count,
  delay,
  concatMap,
  mergeMap,
  toArray,
  filter
} from 'rxjs/operators';
import Axios from 'axios-observable';

// const getRandomBoolean = () => Boolean(Math.round(Math.random()));

// const oneRandomBooleanPerSecond$ = interval(1000).pipe(switchMap(() => of(getRandomBoolean())));

// const oneRandomBooleanPerSecondFiveTimes$ = oneRandomBooleanPerSecond$.pipe(take(5));

// oneRandomBooleanPerSecondFiveTimes$.subscribe(val => console.log(val));

/**
 * This functions shows how to count something using RxJs
 */
function countEmissions() {
  const person = ['Carl', 'David', 'George'];

  return interval(1000).pipe(
    take(3),
    flatMap(() => person),
    delay(1000),
    tap(value => console.log(value)),
    count(),
    tap(value => console.log(value))
  );
}
// countEmissions().subscribe();

function joinAPICalls() {
  const getSixTodos$ = from(['1', '2', '3', '4', '5', '6']).pipe(
    mergeMap(id =>
      Axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(map(result => result.data))
    ),
    toArray()
  );

  const sixTodosIncompleted = getSixTodos$.pipe(
    flatMap(value => value),
    filter(todo => !todo.completed),
    toArray()
  );

  sixTodosIncompleted
    .pipe(
      flatMap(todo => todo),
      mergeMap(todo =>
        Axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`).pipe(
          map(user => ({ ...todo, user }))
        )
      ),
      toArray()
    )
    .subscribe(result => console.log('todos', result));

  const test = ['Carl', 'Johanna', 'Stefan', ['test']].flatMap(value => value + 'test');
  console.log(test);
}

// joinAPICalls();

from(['1', '2', '3', '4', '5', '6']).pipe(
  filter(value => +value > 2),
  toArray(),
  flatMap(value => value),
  count(),
  tap(value => console.log(value))
);

interval(3000)
  .pipe(
    map(value => value * 2),
    count()
  )
  .subscribe(value => console.log(value));

// console.log(['1', '2', '3', '4', '5', '6'].filter(value => +value > 2));

export {};
