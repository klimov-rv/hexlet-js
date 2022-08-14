// По общепринятому соглашению, lodash импортируется под именем _
// import _ from 'lodash';

import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http

console.log(getDomainInfo('yandex.ru'));

// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

console.log(getDomainInfo('https://hexlet.io'));

// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

console.log(getDomainInfo('http://google.com/test.html'));

// {
//   scheme: 'http',
//   name: 'google.com',
// }
