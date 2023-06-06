// #todo

'use strict';

let userInput = ''; // Create a variable userInput and initialize it with an empty string.

let isTooShort = true; // Create a variable isTooShort and initialize it with the value true.
while (isTooShort) { // Start a while loop that will run as long as isTooShort is true.
  userInput = prompt('enter anything longer than 5 characters'); // Display a prompt asking the user to enter anything longer than 5 characters and assign the entered value to the userInput variable.

  if (userInput === null) { // Check if userInput is null (user clicked cancel or closed the prompt).
    alert('there is no escape'); // Display the message "there is no escape".
    continue; // Skip the rest of the current iteration and move to the next iteration.
  }
  isTooShort = userInput.length <= 5; // Check if the length of userInput is less than or equal to 5 and assign the result to isTooShort.
  if (isTooShort) { // Check if isTooShort is true.
    alert('too short'); // Display the message "too short".
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long'); // Display a message that includes the userInput and its length.

