// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let leftNum = readNumber('left-num');
  let rightNum = readNumber('right-num');
  // --- compare the numbers ---
  
  // --- create a message

  // --- display the message ---
});
