'use strict';

let message = 'Hello';
console.log(message)

{
  let newMessage = 'Bye';
  message = newMessage;
}

console.log(message);
