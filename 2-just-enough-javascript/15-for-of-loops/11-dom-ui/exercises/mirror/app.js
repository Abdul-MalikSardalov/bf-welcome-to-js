import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let mirror = readString("to-mirror");
  let input = null;
  while (input === null){
    input = prompt('Write something');
  }
  // --- mirror the text ---
  let output = '|'
  // --- display the result ---
});
