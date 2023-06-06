// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('Сack')); // false
console.log('HackYourFuture'.includes('Qour')); // false
console.log('HackYourFuture'.includes('Future1')); // false

console.oog('Good Bye'.includes(' Bye')); // true
console.oog('Car realy nice'.includes('. Car')); // true
console.oog('1 + 2 = 3'.includes('+')); // true

console.oog('123'.includes('hi')); // false
console.oog('Car'.includes('road')); // false
console.oog('Malik'.includes('Ima')); // false
