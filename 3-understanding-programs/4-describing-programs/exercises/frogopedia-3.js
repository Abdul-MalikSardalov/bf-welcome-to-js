// #todo

'use strict';

const animalName = 'frog'; // Create a constant variable animalName and initialize it with the string 'frog'.

let coolThing = ''; // Create a variable coolThing and initialize it with an empty string.

while (true) { // Start an infinite while loop (loop will continue until a break statement is encountered).

  coolThing = prompt('tell me something about ' + animalName + 's'); // Display a prompt asking the user to tell something about frogs and assign the entered value to the coolThing variable.

  if (coolThing === '' || coolThing === null) { // Check if coolThing is an empty string or null.
    alert('that is not something'); // Display the message "that is not something".
    continue; // Skip the rest of the current iteration and start the next iteration of the loop.
  }

  if (coolThing.toLowerCase().includes(animalName)) { // Check if the coolThing (converted to lowercase) includes the animalName.
    break; // Exit the loop.
  }

  alert('nope, not about frogs. try again.'); // Display the message "nope, not about frogs. try again."
}

alert('i just learned something cool about frogs!\n\n- "' + coolThing + '"'); // Display a message indicating that something cool about frogs has been learned, along with the content of the coolThing variable.

