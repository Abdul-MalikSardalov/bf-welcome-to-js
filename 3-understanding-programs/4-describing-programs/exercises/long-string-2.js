// #todo

'use strict';

let anything = ''; // Create a variable anything and initialize it with an empty string.

while (true) { // Start an infinite loop.
  anything = prompt('enter anything longer than 5 characters'); // Display a prompt asking the user to enter anything longer than 5 characters and assign the entered value to the anything variable.

  if (!anything) { // Check if anything is falsy (empty string, null, or undefined).
    alert('there is no escape'); // Display the message "there is no escape".
    continue; // Skip the rest of the current iteration and move to the next iteration.
  }

  if (anything.length <= 5) { // Check if the length of anything is less than or equal to 5.
    alert('too short'); // Display the message "too short".
    continue; // Skip the rest of the current iteration and move to the next iteration.
  }
  break; // Exit the loop.
}

alert('"' + anything + '" is ' + anything.length + ' characters long'); // Display a message showing the entered anything and its length.

