// const friend = [ 'Lera', 'Masha', 'yuila', 'timur', 'mark']

// // alert(`це моя подруга ${friend[0]}`);
// // alert(`це моя подруга ${friend[1]}`);
// // alert(`це моя подруга ${friend[2]}`);

// for (let i = 0; i < friend.length; i += 1) {
//     alert(`це моя подруга ${friend[i]}`)
// }

// console.log(friend);

const shop = [1200, 2000, 3000, 4000]
const podatok = 20;
let totalSumm = 0;

for (let i = 0; i < shop.length; i += 1) {
    const totalPrice = shop[i] + shop[i]*0.2;
    totalSumm += totalPrice;
    console.log(totalPrice)
} 

console.log(totalSumm);