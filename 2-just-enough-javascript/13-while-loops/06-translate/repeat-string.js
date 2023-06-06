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
//   input <- prompt('enter some text')
// :END WHILE
while(input === null){
  input = prompt('enter some text');
}

/* ---   ?   --- */

// repeated <- ''
let repeated = '';
let i = 0;
// i <- 0

// WHILE: i < input.length
//   repeated <- repeated + '\n' + input
//   i <- i + 1
// :END WHILE
while (i < input.length){
  repeated = repeated + '\n' + input;
  i++;
}

/* ---   ?   --- */

alert(repeated);
