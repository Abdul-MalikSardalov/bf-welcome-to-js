// #todo

'use strict';

let noun = null; // Create a variable noun and initialize it with the value null.

while (noun === null) { // Start a while loop that will run as long as noun is equal to null.
  noun = prompt('enter a noun'); // Display a prompt asking the user to enter a noun and assign the entered value to the noun variable.
}

let verb = null; // Create a variable verb and initialize it with the value null.
while (verb === null) { // Start a while loop that will run as long as verb is equal to null.
  verb = prompt('enter a verb'); // Display a prompt asking the user to enter a verb and assign the entered value to the verb variable.
}

let adjective = null; // Create a variable adjective and initialize it with the value null.
while (adjective === null) { // Start a while loop that will run as long as adjective is equal to null.
  adjective = prompt('enter an adjective'); // Display a prompt asking the user to enter an adjective and assign the entered value to the adjective variable.
}

const madlib = 'the ' + adjective + ' ' + noun + ' likes to ' + verb; // Create a constant variable madlib and initialize it with a string that combines the entered noun, verb, and adjective.

alert(madlib); // Display the value of the madlib variable using an alert.

