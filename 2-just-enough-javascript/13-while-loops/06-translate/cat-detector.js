// #todo

'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- ? --- */

// input <- null
let input = null;
// WHILE: input === null
//   input <- prompt('please enter "cat"')
while (input === null){
  input = prompt('please enter "cat"');
}
// :END WHILE

/* --- ? --- */

let message = '';

// IF: input !== 'cat'
if (input !== 'cat'){
  //   message <- '"' + input + '" is not a cat'
  message += `'${input}' is not a 'cat'`;
} else {
  // ELSE:
  //   message <- 'thank you for the cat'
  message += 'thank you for the cat';
}

alert(message);
// :END IF

/* --- ? --- */

// alert(message)
