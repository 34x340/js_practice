const massiv = [1, 3, 5, 2, 8, 10, 6];
const lustIndex = massiv.length -1;
console.log(massiv[lustIndex]);


const newLustIndex = massiv[lustIndex] = 50;

console.log(newLustIndex);

// При роботі з простими типами данних значення у зміннії передаються в іншу зміну як копія

let num = 1;
console.log(num);
const test = num;
console.log(test);

num = 5;
console.log(num);
console.log(test);

// При роботі зі складними типами даних значення у змінній передається за посиланням

const array = [1, 3, 5, 7]
const testS = array;
console.log(array);
console.log(testS);

array[2] = "Hop";
console.log(array);
console.log(testS);


const newArray = [...array];

// Ітерація(перебір) по масив

// Цикил for ми використовуємо якщо потрібен індекс і потрібно змінити елемент масиву
const fruits = ['orange', 'coconut', 'apple', 'pineapple', 'banana'];
for (let i = 0; i < fruits.length; i ++) {
    console.log(fruits[i]);
}

// Цикл for ... of використовуємо якщо не потрібен індекс і у масиві не міняємо значення
for (const fruit of fruits) {
    console.log(fruit);
}



const salaries = [12000, 20000, 30000, 50000];
let totalSalaries = 0;
for (const salary of salaries) {
    totalSalaries = salary + totalSalaries;
    console.log(${totalSalaries} = ${salary} + ${totalSalaries});
};
console.log(totalSalaries);