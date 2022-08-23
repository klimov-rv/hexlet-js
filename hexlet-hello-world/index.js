import scrabble from './scrabble.js';
 
console.log(scrabble('rkqodlw', 'world')); // true
console.log(scrabble('avj', 'java')); // false
console.log(scrabble('avjafff', 'java')); // true
console.log(scrabble('', 'hexlet')); // false
console.log(scrabble('scriptingjava', 'JavaScript')); // true
