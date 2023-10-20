// const fruits =['mango', 'apple', 'banana']

// fruits.push('pear')
// console.log(fruits);

// // push/pop

// fruits.shift(1)
// console.log(fruits);
// fruits.unshift('kiwi')
// console.log(fruits);

// //shift unshift

// fruits.pop('')
// console.log(fruits)

// // pop

// const vehicles = ['car', 'bus', 'bike', 'plane'];
// const newVehicles = vehicles.slice(1, 3);
// console.log(newVehicles);

// slice

// const fruit = ['apple', 'banana', 'grape', 'melon']

// fruit.splice(3, 0, 'avokado')
// console.log(fruit);

// fruit.splice(1, 2)
// console.log(fruit);

//splice

// Працюємо з колекцією карточок в trello
//   - Метод splice() - міняє масив
//  - Видалити
//  - Додати
//  * - Оновити

const cards = ['1-task', '2-task', '3-task', '4-task']

const cardNameDelete = prompt('Введіть назву картки, яку ви хочете видалити');
const cardToDeleteIndex = cards.indexOf(cardNameDelete)

const deleteCard = cards.splice(cardToDeleteIndex, 1);
console.log(cards);

const cardNameAdd = prompt('Напишіть назву нової карточки')
// const cardToAdd = cards.push(cardNameAdd);
const cardToAdd = cards.splice(cards.length, 0, cardNameAdd)
console.log(cards);

const cardCut = prompt('Яку картку ви хочете замінити');
const CardCutIndex = cardCut.indexOf(cardCut)
const cardAdd  = prompt('Яку назву ви хочете поставити на місце минулої');
cards.splice(CardCutIndex, 1, cardAdd);
console.log(cards);
