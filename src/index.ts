import { HelloCGI } from './program';

const greeter = new HelloCGI();
const greeting = greeter.greet('John Connor');

console.log(greeting);

// [Method Start (greet)]: with arguments John Connor
// [Result (greet)]: => Welcome to CGI, John Connor!
// Welcome to CGI, John Connor!




