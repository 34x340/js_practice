// funtion declaration - оголошення функцій - 1 спосіб

// const salary = [1000, 2000, 3000, 4000, 5000]

// function countSalary (a, b, c) {
//     const totalSalary = a + b + c
//     return totalSalary
//     totalSalary += 1
// }

// // countSalary(1000, 2425, 3963)

// const result = countSalary(1000, 2425, 3963)
// console.log(result)

// function expression - функціональний вираз - 2 спосіб

// const countSalary = function  (a, b, c) {
//     const totalSalary = a + b + c
//     return totalSalary
//     totalSalary += 1
// }

// console.log(countSalary(1000, 2920, 3230))

// Коли ми передаємо різну кількість аргументів у функцію, ми можемо користуватися псевдомасивом arguments, або опреацією rest

// function calculatePrice () {
//     let totalSum = 0
//     const array = Array.from(arguments)
//     console.log(array)
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//         totalSum = totalSum + array[i]
//     }
//     return totalSum
// }
// console.log(calculatePrice(3000, 300, 600));

// console.log(calculatePrice(100, 200, 400, 800, 1600, 3200)

// через rest 

function calculatePrice (...numbers) {
    let totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        totalSum = totalSum + numbers[i]
    }
    return totalSum
}
console.log(calculatePrice(3000, 300, 600));

console.log(calculatePrice(100, 200, 400, 800, 1600, 3200))