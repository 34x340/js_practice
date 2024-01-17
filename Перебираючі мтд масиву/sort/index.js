// Метод Array.prototype.sort(callback(currentEl, nextEl){}) - перебирає оригінальний масив,
//              сортує його, та змінює. По замовчуванню сортує від найменшого до найбільшого

// const numbers = [1,2,3,4,5]
// const numbersSort = numbers.sort()

// console.log(numbersSort)

// const numbers = [1,2,3,4,5]

// const numbersSsort = numbers.sort((currentNumber, nextNumber) => {
//     return currentNumber - nextNumber }
// );

// console.log(numbersSsort)

// 2 

// const numbers = [1, 3, 7, 2, 6]
// const numbersSort = [...numbers]
// numbersSort.sort()

// console.log(numbersSort)

// const numbersSsort = [...numbers]
// numbersSsort.sort((currentNumber, nextNumber) => {
//     return nextNumber - currentNumber
// })

// console.log(numbersSsort)
// console.log(numbers)

// 3

const people = [
    { name: 'John', gender: 'boy', age: 32, occupation: 'programmer' },
    { name: 'Jane', gender: 'girl', age: 26, occupation: 'teacher' },
    { name: 'Mike', gender: 'boy', age: 42, occupation: 'engineer' },
    { name: 'Emily', gender: 'girl', age: 17, occupation: 'designer' }
];

const peopleNames = [...people]
peopleNames.sort((currentAge, nextAge) => {
    return currentAge - nextAge
})

console.log(peopleNames)