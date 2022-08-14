// По общепринятому соглашению, lodash импортируется под именем _
import _ from 'lodash';

import is from './company.js';

// Пересечение массивов
_.intersection([2, 1], [2, 3]); // => [2]

// capitalize делает первую букву заглавной
_.capitalize('hello'); // Hello

// console.log('Hello, Hexlet!');
// console.log(_.last(['one', 'two']));

const user = {
  name: 'roman',
  married: true,
  age: 34,
};

_.capitalize(user.name);



 

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };

const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };

is(company1, company2); // false

// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

// const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

// is(company1, company2); // true
