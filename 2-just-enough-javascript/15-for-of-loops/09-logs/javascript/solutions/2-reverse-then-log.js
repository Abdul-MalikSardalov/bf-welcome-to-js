'use strict';

let backwards = 'tpircsavaj';
let language = '';
// use a for-of loop to reverse `backwards`
for (let character of backwards){
  language = character + language;
}
//  assign the reversed string to `language`
console.log(language);
// log each character in `language`
