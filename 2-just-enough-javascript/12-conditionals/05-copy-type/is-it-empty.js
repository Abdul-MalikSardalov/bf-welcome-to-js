// #todo

'use strict';

let input = prompt('Write your name');
let message = '';

if (input === null){
  alert(':(')
}
else{
  message += 'Hello ' + input;
}
alert(message);
