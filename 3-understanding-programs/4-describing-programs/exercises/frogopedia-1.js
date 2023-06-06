// #todo

'use strict';

const animalName = 'frog'; // Declare a constant variable animalName and assign it the value 'frog'.

let userInput = ''; // Declare a variable userInput and initialize it with an empty string.

let isFroggy = false; // Declare a variable isFroggy and initialize it with the value false.

while (isFroggy === false) { // Start a while loop that will run as long as isFroggy is false.

  userInput = prompt('tell me something about frogs'); // Display a prompt asking the user to enter something about frogs and assign the entered value to the userInput variable.

  if (userInput === '' || userInput === null) { // Check if userInput is an empty string or null.
    alert('that is not something'); // Display the message "that is not something".
  } else if (userInput.toLowerCase().includes(animalName)) { // Check if userInput (converted to lowercase) includes the value of the animalName variable.
    isFroggy = true; // Set isFroggy to true.
  } else {
    alert('nope, not about frogs. try again.'); // Display the message "nope, not about frogs. try again."
  }
}

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"'); // Display a message with the content of the userInput variable.

