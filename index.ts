import { from } from 'rxjs';
import { map } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
// Example 2: Map to single property

//emit obj
const srcObj$ = from([
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ryan', age: 50 },
]);
//grab each persons name, could also use pluck for this scenario
const example = srcObj$.pipe(map(({ name }) => name));
const subscribe = example.subscribe((val) => console.log(val));
//output: "Joe","Frank","Ryan"
