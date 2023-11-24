// замикання це коли f a() повертає з себе іншу f b(). В такому випадку, функція f b(), буде мати доступ до всіх локальних змінних(області видимості)
//          батьківської функції f a

// const fa = () => {
//     const a = 'Значення внутрішньої змінної функції fa';
//     const fb = () => {
//         console.log(a);
//         return "Виклик функції fb";
//     }
//     return fb;
// }

// const fb = fa();

// console.log(fb());

// Приклад ресторан 
// const makeDish = (waiterName, dishName) => {
//     return `${waiterName} готує ${dishName} `;
// }

// console.log(makeDish("Artem", "pizza"));
// console.log(makeDish("Artem", "Ice-Cream"));
// console.log(makeDish("Artem", "tea"));
// console.log(makeDish("Diana", "soup"))
// Замикання - це коли fa() повертає з себе іншу fb(). В такому випадку функція fb, буде мати доступ до всіх локальних змінних (області видомості), батьківської функції fa.

// перепишимо на замикання, помістимо функцію у функцію, щоб не повторювати офіціанта

// const makeWaiter = (waiterName) => {
//     const message = `Вітаємо в нашому ресторані`;
//     const makeDish = (dishName) => {
//         console.log(message);
//         return `${waiterName} готує ${dishName} `;
//     }
//     return makeDish;
// }

// const waiterArtem = makeWaiter("Artem");
// console.log(waiterArtem('pizza'));
// console.log(waiterArtem('ice-cream'));
// console.log(waiterArtem('tea'));
// const waiterDiana = makeWaiter

//  приклад округлятор 

const numer = 10.5976

const roundNumber = (num, quantity) => {
    return Number (num.toFixed(quantity))
}

console.log(roundedNumber(4276.7623, 3))