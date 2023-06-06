// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// letters <- null
let letters = null;
// WHILE: letters === null
//   letters <- prompt('enter some letters')
// :END WHILE
while (letters === null){
  letters = prompt('Enter some letters');
}
/* ---   ?   --- */

// noConsonants <- true
let noConsonants = true;
// FOR: letter OF letters
//   lowerCaseLetter <- letter.toLowerCase()
//   IF: 'bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)
//     noConsonants <- false
//     BREAK
//   :END IF
// :END FOR-OF
for (let letter of letters){
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)){
    noConsonants = false;
    break
  }
}
/* ---   ?   --- */

// message <- ''
let message = '';
// IF: noConsonants
//   message <- '"' + letters + '" has no consonants'
// ELSE:
//   message <- '"' + letters + '" has at least one consonant'
// :END IF
if (noConsonants){
  message += `'${letters} + has no consonants'`;
}else{
  message += `"${letters} + has at least on consonsnt"`;
}
/* ---   ?   --- */

alert(message)
