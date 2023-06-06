// #todo

'use strict';

let input = null; // Create a variable input and initialize it with the value null.
while (input === null) { // Start a while loop that will run as long as input is equal to null.
  input = prompt('enter some text, the program will check if it is excited'); // Display a prompt asking the user to enter some text and assign the entered value to the input variable.
}

let isExcited = false; // Create a variable isExcited and initialize it with the value false.
for (const char of input) { // Iterate over each character in the input string using a for...of loop.
  if (char === '!') { // Check if the current character is an exclamation mark.
    isExcited = true; // Set isExcited to true.
    break; // Exit the loop.

  }
}
let message = ''; // Create a variable message and initialize it with an empty string.
if (isExcited) { // Check if isExcited is true.
  message = '"' + input + '" is excited'; // Assign a message indicating that the input is excited to the message variable.
} else {
  message = '"' + input + '" is not excited'; // Assign a message indicating that the input is not excited to the message variable.
}

alert(message); // Display the value of the message variable.


