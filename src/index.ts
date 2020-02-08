import { HelloCGI } from './program';

const greeter = new HelloCGI();
const greeting = greeter.greet('John Connor');

console.log(greeting);
