import fill from './objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

console.log(fill(company, ['name'], data));
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

console.log(fill(company, [], data));
// {
//   name: 'Hexlet',
//   state: 'published',
// }
