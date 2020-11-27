import { interval, of } from 'rxjs';
import { map, switchMap, take, tap, flatMap, count, delay } from 'rxjs/operators';

const getRandomBoolean = () => Boolean(Math.round(Math.random()));

const oneRandomBooleanPerSecond$ = interval(1000).pipe(switchMap(() => of(getRandomBoolean())));

const oneRandomBooleanPerSecondFiveTimes$ = oneRandomBooleanPerSecond$.pipe(take(5));

oneRandomBooleanPerSecondFiveTimes$.subscribe(val => console.log(val));

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

countEmissions().subscribe();

export {};
