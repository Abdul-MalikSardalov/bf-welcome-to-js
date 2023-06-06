// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// thingToRemember <- prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win')
let thingToRemember = prompt('enter some text, then remember it.\n\n' + 'if you remember it correctly you win');
if (thingToRemember !== null){
  let guess = prompt('now try to remember what it was:');
  if (guess !== null){
    if (guess === thingToRemember){
      alert('You win');
    }
    else{
      alert('Try again');
    }
  }
}
alert('good bye')
