import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let left = readNumber('left');
  let right = readNumber('right');

  // --- multiply the numbers ---
  let result = left * right;
  // --- create a message ---
  let message = `${left} * ${right} === ${result}`;
  // --- display the message ---
  displayString('product', message);
});
