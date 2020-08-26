import {interval, of} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';

const getRandomBoolean = () => Boolean(Math.round(Math.random()));

const oneRandomBooleanPerSecond$ = interval(1000).pipe(
  switchMap(() => of(getRandomBoolean()))
);

const oneRandomBooleanPerSecondFiveTimes$ = oneRandomBooleanPerSecond$.pipe(
  take(5)
);

oneRandomBooleanPerSecondFiveTimes$.subscribe(val => console.log(val));
