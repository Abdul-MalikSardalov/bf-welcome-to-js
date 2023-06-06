// #todo

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// input <- null
let input = null;

while (input === null){
  input = prompt('enter something, it will become curious');
}
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

let output;

if (input[input.length - 1] !== '?'){
  output = input + '?';
}

alert(output);
// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)
