// #todo

'use strict';

/* Has an "x"


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */
let message = '';
// input <- null
let input = null;
// WHILE: input === null
while (input === null){
  input = prompt(`enter something, the program will check if it has an "x"`)
}
// input <- prompt('enter something, the program will check if it has an "x"')
// :END WHILE

/* ---  ?  --- */

// IF: input.includes('x')
if (input.includes('x')){
  message += `has at least one "x"`;
} else {
  message += `does not have a single "x"`;
}

alert(message);
//  message <- message + 'has at least one "x"'
// ELSE:
//  message <- message + 'does not have a single "x"'
// :END IF

/* ---  ?  --- */


