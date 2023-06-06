// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null
let input = null;
// WHILE: input === null
while(input === null){
  input = prompt('enter something');
}
//   input <- prompt('enter something')
// :END WHILE

/* ---   ?   --- */

// output <- ''
let output = '';
// IF: input === ''
//   output <- 'you entered nothing :('
if (input === ''){
  output += 'you entered nothing :(';
}
// ELSE:
//   output <- 'thank you for something!'
else {
  output += 'thank you for something!';
}
// :END IF

/* ---   ?   --- */

alert(output);
