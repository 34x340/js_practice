// перебір об'єкту через фор ... ін

const baseAccount = {
    favMessages: 38,
}

const account = Object.create(baseAccount);
console.log(account)

account.mainMessagess = 20,
account.spam = 7,
account.drafts = 10;

let totalMails = 0;

for ( const key in account) {
    if (account.hasOwnProperty(key)) {
        totalMails += account[key]
    console.log(account[key])
    }
    }
    
console.log(totalMails)

const accountValues = Object.values(account);
accountValues.forEach(value => {
    totalMails += value;
});
// for (let i = 0; i < accountValues.length; i++){
//     totalMails += accountValues[i];
// }

console.log(totalMails);