// class User {
//     static configuration = "info"
//     #password
//     constructor(userData) {
//         const {userLogin, userPassword, userName} = userData
//         this.login = userLogin;
//         this.#password = userPassword;
//         this.name = userName;
//     }   
//     showMessage() {
//         alert(`У користувача ${this.name} такий логін ${this.login} та пароль ${this.#password}`)
//     };
//     // showPassword() {
//     //     return this.#password
//     // }
//     // changePassword(newPassword) {
//     //     this.#password = newPassword
//     // }
//     get password() {
//         return this.#password
//     }
//     set password(newPassword) {
//         this.#password = newPassword
//     }
// }

// console.log(User.configuration)

// const kirillData = {
//     userLogin: "kirill232",
//     userPassword: 1234,
//     userName: "Kirill"
// }

// const kirill = new User(kirillData)
// console.log(kirill)
// kirill.showMessage()

// // kirill.changePassword(4321)

// kirill.password
// kirill.password = 4321





// Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');



class Person {
    constructor (firstName, lastName) {
        this.name = firstName;
        this.surname = lastName
    }
    fullName () {
        return this.name + " " + this.surname 
    }
}

const pasha = new Person('Pasha', 'Zhuravlov')

console.log(pasha.fullName())

