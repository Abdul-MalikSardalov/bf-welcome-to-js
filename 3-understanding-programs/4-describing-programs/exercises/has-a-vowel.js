// #todo

'use strict';

let characters = null; // Create a variable characters and initialize it with the value null.

while (characters === null) { // Execute the following block of code as long as characters is equal to null.
  characters = prompt('enter some characters'); // Prompt the user to enter some characters and assign the entered value to the characters variable.
}

const vowels = 'aeiouAEIOU'; // Create a constant variable vowels and initialize it with a string of vowels in both lowercase and uppercase.

let hasAVowel = false; // Create a variable hasAVowel and initialize it with the value false.

for (const char of characters) { // Iterate over each character in the characters string using a for...of loop.
  if (vowels.includes(char)) { // Check if the current character is included in the vowels string.
    hasAVowel = true; // Set hasAVowel to true.
    break; // Exit the loop.
  }
}

if (hasAVowel) { // Check if hasAVowel is true.
  alert('"' + characters + '" has at least one vowel'); // Display a message indicating that the characters string has at least one vowel.
} else {
  alert('"' + characters + '" has no vowels'); // Display a message indicating that the characters string has no vowels.
}

