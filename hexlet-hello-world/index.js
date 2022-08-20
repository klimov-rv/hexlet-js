import make from './objects.js';

const company1 = make('Hexlet');
console.log(company1);
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const company2 = make('Hexlet', { website: 'hexlet.io', state: 'published' });
console.log(company2);
// {
//   name: 'Hexlet',
//   website: 'hexlet.io',
//   state: 'published',
//   createdAt: <тут текущая дата>
// }
