// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// }

// const data = {
//   name: 'John',
//   diagnosis: {
//     CAN: '01/05/2017',
//     ADGH: '02/04/2018',
//     GTLP: '09/08/2019'
//   },
//   address: {
//     first: '23 main st',
//     last: '45 oak str'
//   }
// }

// const diagnosisArr = Object.keys(data.diagnosis);
// const addressArr = Object.values(data.address);
// const diagnosisEntries = Object.entries(data.diagnosis);

// const strings = diagnosisEntries.map(([diagnosis, date]) => {
//   return `${diagnosis} diagnosed on ${date}`;
// })

// const arr2 = [{a: 1, b: 2}, null, {a: 7, b:9}]

// const r = arr2.map((item = { a: 0, b: 0 }) => {
//   return `${item.a} <-> ${item.b}`;
// })

// console.log(r);

// console.log(diagnosisEntries);

// console.log(strings);

// const arr3 = [
//   {
//     name: 'Bob',
//     age: 12
//   },
//   {
//     name: 'Tom',
//     age: 23
//   },
//   {
//     name: 'Tom',
//     age: 34
//   },
// ]

// const a = arr3.every((person) => {
//   console.log(person.age < 40);
//   return person.age < 40;
// })

// console.log('a:', a);

// const index = arr3.findLastIndex(person => person.name === 'Tom');

// console.log('person index: ', index);


// const arr4 = [[1, 2], [3, [31, [311, 312]]], [5, 6, 7]]

// const flatArr = arr4.flat(5);

// console.log(flatArr);

// const str1 = 'foo/123';

// console.log(Array.from(3))

// const arr5 = ['John', 'Bob', 'Sam']

// const name = 'Bob';

// if (arr5[0] === name || arr5[1] === name || arr5[2] === name) {
//   console.log('Gres is in the list');
// } else {
//   console.log('Gres is not in the list');
// }

// let isInTheList = false;

// for (let i = 0; i < arr5.length; i++) {
//   if (name === arr5[i]) {
//     isInTheList = true;
//   }
// }

// console.log('Is greg in the list? ', isInTheList);

// console.log('Is greg included in the list? ', arr5.includes(name));

// console.log('is arr5 array? ', Array.isArray(isInTheList));

// const arr6 = [4, 6, 7];

// console.log(arr6.join(' '));

// console.log(arr5.keys());

const arr7 = [];

console.log('arr7: ', arr7);

arr7.push('John');

console.log('arr7: ', arr7);

arr7.push('Bob');

console.log('arr7: ', arr7);

arr7.push('Greg');

console.log('arr7: ', arr7);

arr7.pop();

console.log('arr7: ', arr7);

arr7.shift();

console.log('arr7', arr7);
