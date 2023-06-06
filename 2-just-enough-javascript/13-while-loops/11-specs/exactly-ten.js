// #todo

'use strict';

/*
  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';
let correctCharacterNumber = 10;
/* --- create final output --- */
let userInput;
while (true) {
  userInput = prompt('Enter text with 10 characters');
  if (userInput === null){
    alert('You need write something');
  }
  else if (userInput.length < 10){
    alert(`Your text too short. Add ${correctCharacterNumber - userInput.length} more characters` );
  }
  else if (userInput.length > 10){
    alert(`Your text too long. Remove ${userInput.length - correctCharacterNumber} characters`);
  }
  else{
    alert('Very good. ' + 'Thanks');
    break;
  }
}


console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
