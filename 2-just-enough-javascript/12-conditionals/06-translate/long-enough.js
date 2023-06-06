// #todo

'use strict';
/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('enter anything longer than 5 characters')
let userInput = prompt('enter anything longer than 5 characters');

let message = '';

if (userInput === null) {
  alert(':(');
} else {
  if (userInput.length < 5) {
    message += 'too short'
  } else if (userInput.length > 5) {
    message += 'Long enough';
  } else {
    message += 'exactly 5!';
  }
}

alert(message);
//   IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)
