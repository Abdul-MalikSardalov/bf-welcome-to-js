// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// message <- 'your favorite color is '
let message = 'your favorite color is ';
// unconfirmed <- true
let unconfirmed = true;
// WHILE: unconfirmed
while (unconfirmed){
  //  input <- prompt('what is your favorite color?')
  //   IF: input === null
  //     alert('there is no escape')
  let input = prompt('what is your favorite color?');
  if (input === null){
    alert('there is no escape');
  } else {
    let confirmed = confirm(`is this correct? '${input}'`);
    if (confirmed === true){
      message += input;
      unconfirmed = false;
    } else {
      message = 'its sad u dont have favorite color';
      break;
    }
  }
}

alert(message);
//   ELSE:
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */


