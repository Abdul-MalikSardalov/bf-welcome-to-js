// #todo

'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';


while (true){
  let userInput = prompt('Write one character');

  if (!userInput){
    alert('You need write something');
    continue;
  }

  else if (userInput === ''){
    alert('Your text is empty');
    continue;
  }

  else if (userInput.length > 1){
    alert('Write only one character');
    continue;
  }
  else{
    output += userInput;
    let isEnough = confirm('Do you want add more?');
    if (isEnough){
      continue;
    }
    else{
      break
    }
  }
}


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
