// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');


let output = '';
let newMessage;
while (true) {
  let userInput = prompt(
    `Write something with capital letter and '.' in the end`,
  );
  if (userInput === null) {
    alert('You need write something');
  } else if (userInput.length < 2) {
    alert('Too short');
  } else if (userInput[0] !== userInput[0].toUpperCase()) {
    alert('Your first latter should be uppercase');
  } else if (userInput[userInput.length - 1] !== '.') {
    alert('Must end with "."');
  } else {
    if ( userInput[userInput.length - 1] === '.' || userInput[0] === userInput[0].toUpperCase()) {
      output = userInput[0].toLowerCase() + userInput.substring(1, userInput.length - 1);
      break;
    }
  }
}
alert(output);

console.log('output:', output);
alert(output);

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
