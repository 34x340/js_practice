// class User {
//     constructor (userLogin, userPassword, userName) {
//         this.login = userLogin;
//         this.password = userPassword;
//         this.name = userName
//     }
//         showMessage = function() {
//             alert(`у користувача ${this.name} такий ${this.login} та пароль ${this.password}`)
//     }
// }

// const kirill = new User ('123', '234', '456')
// console.log(kirill)
// kirill.showMessage

// 2 //////

class User {
    constructor (userLogin, userPassword, userName) {
        const {userLogin, userPassword, userPassword} = userData
        this.login = userLogin;
        this.password = userPassword;
        this.name = userName
    }
        showMessage = function() {
            alert(`у користувача ${this.name} такий ${this.login} та пароль ${this.password}`)
    }
}

const pashaData = {
    userLogin: '123',
    userPassword: '2345',
    userName: '456'
}

const pasha = new User (pashaData)
console.log(pasha)
pasha.showMessage()