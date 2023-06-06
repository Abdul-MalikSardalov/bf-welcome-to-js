// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- ''
let input = '';
// prompting <- true
let prompting = true;

// WHILE: prompting
//   input <- prompt('enter something longer than 4 characters, or "cancel" to leave')
while (prompting){
  input = prompt('enter something longer than 4 characters, or "cancel" to leave');
  if (input === null){
    prompting = false;
    input = 'you canceled';
  }
  else if (input.length > 4){
    prompting = false;
  }
}

alert(input);
//   IF: input === null
//     prompting <- false
//     input <- 'you canceled'
//   ELSE: IF: input.length > 4
//     prompting <- false
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(input)
