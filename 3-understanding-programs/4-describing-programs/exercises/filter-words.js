// #todo

'use strict';

// Create a variable sentence and initialize it with an empty string.
let sentence = ''; 

// Create a variable isValid and initialize it with the value false.
// Start a while loop that will run as long as isValid is false.
let isValid = false; 
while (!isValid) { 

// Display a prompt asking the user to enter a sentence with at least 2 words and assign the entered value to the sentence variable.
  sentence = prompt('enter a sentence with at least 2 words'); 

// Check if sentence is null (user clicked cancel or closed the prompt).
  if (sentence === null) { 
    alert('there is no escape'); // Display the message "there is no escape".
  } else if (sentence.length < 3) { // Check if the length of sentence is less than 3.
    alert('"' + sentence + '" is too short to have two words'); // Display a message indicating that the sentence is too short to have two words.
  } else if (!sentence.includes(' ')) { // Check if sentence does not include a space character.
    alert('there is no space'); // Display the message "there is no space".
  } else {
    isValid = true; // reassign isValid to true.
  }
}

sentence = sentence + ' '; // Append a space to the end of the sentence.

let newSentence = ''; // Create a variable newSentence and initialize it with an empty string.

let nextWord = ''; // Create a variable nextWord and initialize it with an empty string.
for (const character of sentence) { // Iterate over each character in the sentence using a for...of loop.

  if (character === ' ') { // Check if the character is a space.
    const keep = confirm('do you want to keep this word:\n\n- ' + nextWord); // Display a confirmation dialog asking the user if they want to keep the word represented by nextWord.
    if (keep) { // If the user chooses to keep the word,
      newSentence = newSentence + character + nextWord; // append the character (space) and the nextWord to the newSentence variable.
    }
    nextWord = ''; // Reset the nextWord variable to an empty string.
  } else {
    nextWord = nextWord + character; // Append the character to the nextWord variable.
  }
}

alert(newSentence); // Display the value of the newSentence variable.

