// // const user = {
// //     name: 'Joe',
// //     location: {
// //         country: 'Ukraine',
// //         city: 'Lviv',
// //     },
// //     password: 1234
// // }

// // const {name: userName, location: {country: userCountry, city: userCity}, password: userPassword, follower: userFollower = 0} = user

// // console.log(userName, userCountry, userCity, userPassword, userFollower)


// /////////////////////////////////////////////////////////////////////////////////////////////////

// // const cars = {
// //     name: 'car',
// //     cost: 1200,
// //     date: 2015,
// // }

// // const {cost, ...newObject} = cars;

// // console.log(cost);
// // console.log(newObject);

// /////////////////////////////////////////////////////////////////////////////////////////////////

// const numbers = [1,2,3,4];
// // const a = numbers[0]
// // const b = numbers[1]
// // const c = numbers[2]
// // const d = numbers[3]

// // const [a, b, c, d] = numbers

// // let [a, b, c, d, e = 0] = numbers;
// // d = 10;
// // console.log(e);

// // сonst [a, ...newNumbers] = numbers;
// // console.log(a);
// // console.log(newNumbers);

// const [, , a] = numbers
// console.log(a)

// const profile = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };

// const {name, tag, location, avatar, stats: {followers, views, likes}} = profile

// console.log(name);
// console.log(tag);
// console.log(location);
// console.log(avatar);
// console.log(followers);
// console.log(views);
// console.log(likes);