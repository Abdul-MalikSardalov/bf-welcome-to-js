// #todo

'use strict';

let text = null; // Create a variable text and initialize it with the value null.
while (text === null) { // Start a while loop that will run as long as text is equal to null.
  text = prompt('enter some text, it will be mirrored'); // Display a prompt asking the user to enter some text and assign the entered value to the text variable.
}

let mirrored = '|'; // Create a variable mirrored and initialize it with the string '|'.
for (const character of text) { // Iterate over each character in the text string using a for...of loop.
  mirrored = character + mirrored + character; // Concatenate the current character, the mirrored string, and the current character again, and assign the result back to the mirrored variable.
}

alert(mirrored); // Display the value of the mirrored variable using the alert function.

