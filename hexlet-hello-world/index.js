// По общепринятому соглашению, lodash импортируется под именем _
// import _ from 'lodash';

import countWords from './words.js';

// Если предложение пустое, то возвращается пустой объект
console.log(countWords(''));
// {}

const text1 = 'one two three two ONE one wow';
console.log(countWords(text1));
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
console.log(countWords(text2));
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
