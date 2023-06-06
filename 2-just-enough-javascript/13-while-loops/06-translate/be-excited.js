'use strict';

/* Be Excited


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

let input = null;

while (input === null){
  input = prompt('enter something, it will become excited');
}
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

let output;

if (input[input.length - 1] !== '!'){
  output = input + '!';
}

alert(output);
