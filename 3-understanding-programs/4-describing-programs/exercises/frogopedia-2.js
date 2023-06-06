// #todo

'use strict';

const animalName = 'frog'; // Create a constant variable animalName and assign it the value 'frog'.

let userInput = ''; // Create a variable userInput and initialize it with an empty string.

let isNotFroggy = true; // Create a variable isNotFroggy and initialize it with the value true.

while (isNotFroggy === true) { // Start a while loop that will run as long as isNotFroggy is equal to true.

  userInput = prompt('tell me something about frogs'); // Display a prompt asking the user to tell something about frogs and assign the entered value to the userInput variable.

  if (userInput === '' || userInput === null) { // Check if userInput is an empty string or null.
    alert('that is not something'); // Display the message "that is not something".
  } else if (userInput.toLowerCase().includes(animalName)) { // Check if the lowercase version of userInput includes the value of animalName.
    isNotFroggy = false; // Set isNotFroggy to false.
  } else {
    alert('nope, not about frogs.  try again.'); // Display the message "nope, not about frogs. try again."
  }

}

alert('i just learned something cool about frogs!\n\n- "' + userInput + '"'); // Display a message indicating that something cool about frogs has been learned, along with the content of the userInput variable.

