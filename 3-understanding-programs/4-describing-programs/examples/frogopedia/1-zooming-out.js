// #todo

'use strict';

/* 1. Zooming Out

  Understanding what the entire program does just by running, without looking at
  any single line of code.

  - can a user interact with the program?
    - when do they interact? (beginning, middle, end, ...)
    - how is the user's input processed?
    - can the user's input influence the program's flow?
  - what data is at the beginning of the program?
  - what data is at the end of the program?
  - what is the user's journey? how many different paths can it take?
  - ... what else can you say about the program?

*/

/* Frogopedia (program behavior)

  A user can share cool facts about frogs.
  - given the user cancels, they will be prompted again
  - given the input does not contain "frog", the user is told so and prompted for new input
  - given the input contains "frog" (case-insensitive), the program learns something cool

  test cases
  - given the user cancels
    (no output, the input is invalid)
  - given the input does not contain "frog"
    (no output, the input is invalid)
  - fiven the input does contain "frog"
    'frog' -> 'i just learned something cool about frogs!\n\n- "frog"'
    'FROGZZ' -> 'i just learned something cool about frogs!\n\n- "FROGZZ"'
    'green frogs do not exist.'
      -> 'i just learned something cool about frogs!\n\n- "green frogs do not exist."'
 */

// Create a variable userInput and initialize it with an empty string.
let userInput = ''; 

// Create a variable inputIsAboutFrogs and initialize it with the value false.
let inputIsAboutFrogs = false; 

// Start a while loop that will run as long as inputIsAboutFrogs is false.
while (!inputIsAboutFrogs) { 

// Display a prompt asking the user to enter something about frogs and assign the entered value to the userInput variable.
  userInput = prompt('tell me something about frogs'); 

  // Check if userInput is an empty string or null.
  // Display the message "that is not something".
  // Skip the rest of the current iteration and move to the next iteration.
  
  if (userInput === '' || userInput === null) { 
    alert('that is not something'); 
    continue; 
  }

// Check if userInput (converted to lowercase) includes the word "frog".
// Set inputIsAboutFrogs to true.
// Skip the rest of the current iteration and move to the next iteration.

  if (userInput.toLowerCase().includes('frog')) { 
    inputIsAboutFrogs = true; 
    continue; 
  }
// Display the message "nope, not about frogs. try again."

  alert('nope, not about frogs.  try again.'); 
}
// Display a message with the content of the userInput variable.

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"'); 

