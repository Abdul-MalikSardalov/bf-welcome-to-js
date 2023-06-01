'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

// var. to store user input
let message = '';

// loop for user selection options
while (true){
  const userInput = prompt('Write something');
  // if the user chooses cancel
  if (userInput === null){
    alert('there is no escape!');
    break;
  }
  // if the user does not write anything
  if (userInput === ''){
    alert('no empty string allowed');
    break;
  }
  // if the user does everything right
  if (userInput){
    message = userInput;
    break;
  }
}

// variable for final text
let newMessage = '';
const exceptions = ' 1234567890!./'
// loop to get text


// final text output
alert(newMessage)