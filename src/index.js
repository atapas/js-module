
import * as Calc from './calc.js';
import {default as name, sayGreeting} from './whoami.js';

console.log('The Sum is', Calc.sum(2,3));
console.log('The Sub is', Calc.sub(5,3));

console.log('The name is', name());
console.log('Greeting is', sayGreeting('Tapas'));