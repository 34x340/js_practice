// // // const flowers = ['gibiskus', 'rose', 'romashka', 'lillia', 'tyulpan']

// // // console.log(...flowers);
// // // console.log('gibiskus', 'rose', 'romashka', 'lila', 'tyulpan') 

// // // function showMessage (flower1, flower2, flower3) {
// // //     alert(`im love ${flower1}, but ${flower2} is better. And sometimes i gather ${flower3}.`)
// // // }

// // // // console.log(showMessage('gibiskus', 'lillia', 'rose'));

// // // // console.log(showMessage(...flowers));

// // // console.log(showMessage('gibiskus', 'rose', 'romashka', 'lillia', 'tyulpan'))

// // // // ... = 'gibiskus', 'rose', 'romashka', 'lillia', 'tyulpan'



// // // const numbers = [
// // //     1000,
// // //     ...[1, 2, 3],
// // //     5000,
// // //     ...[4, 5, 6],
// // //     7000,
// // //     ...[7, 8, 9],
// // //     9000,
// // //   ];

// // // // const numbers = [1000, 1, 2, 3, 5000, 4, 5, 6, 7000, 7, 8, 9, 9000]
// // // console.log(numbers)

// // const tempreratures = [30, 40, 60, 70, 80]

// // console.log(Math.min(...tempreratures));

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // const totalTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps]

// // const totalTemps = [...lastWeekTemps,  ...nextWeekTemps, ...currentTemps]

// const totalTemps = [1, 2, 3, 7, 8, 9, 4, 5, 6]

// // const totalTemps = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // console.log(totalTemps);

// const a = { 
//     x: 1,
//     y: 2
// };
// const b = {
//     x: 0,
//     z: 3 
// };

// // // const totalObjects = {
// //     ...a, ...b
// // }

// console.log(totalObjects);

// // const totalObjects = {
// //     y: 2, 
// //     x: 0,
// //     z: 3,
// // }

// // const totalObjects = {
// //     ...b, ...a
// // }

// const totalObjects = {
//     z: 3,
//     x: 1,
//     y: 2,
// }

const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
  };

  const userSettings = {
    showNotifications: false,
    hideSidebar: true,
  };

// const newDefaultSettings = {
//     ...defaultSettings, ...userSettings
// }

console.log(newDefaultSettings);

const newDefaultSettings = {
    theme: 'light', showNotifications: false, hideSidebar: true
}

