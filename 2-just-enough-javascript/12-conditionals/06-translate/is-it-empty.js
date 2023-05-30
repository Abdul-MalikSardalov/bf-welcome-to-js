// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

// input <- prompt('do whatever you want')
let userInput = prompt('Write word');
let message;
// message <- 'your input is '
if (userInput === null){
  message = "U didn't write a word"
}
else if(userInput.length < 5){
  message = 'U word is too short'
}
else{
  message = 'Thanks'
}

console.log(message)
// IF: input === null

//   message <- message + 'null'
// ELSE:

//   maybeNot <- ''
//   IF: input.length !== 0

//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF



// alert(message)
