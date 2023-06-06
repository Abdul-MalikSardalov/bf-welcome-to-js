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

while (input === null){
  input = prompt('enter some text, the program will check if it has any spaces');
}

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// hasASpace <- false
let hasASpace = false;
// FOR: char OF input
for ( let char of input){
  if (char === ' '){
    hasASpace = true;
  }
}
//   IF: char === ' '
//     hasASpace <- true
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''
let message = '';

if (hasASpace){
  message += `'${input}' has at least one space`;
}
else{
  message += `'${input}' does not at least one space`;
}
// IF: hasASpace
//   message <- '"' + input + '" has at least one space'
// ELSE:
//   message <- '"' + input + '" does not have any spaces'
// :END IF

/* ---   ?   --- */

alert(message);
