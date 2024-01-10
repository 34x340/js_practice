// const friends = ['Pasha', 'Masha', 'Sasha'];
// const friendsToUpperCase = friends.map((friend) => {
//     const updateName = friend.toLocaleUpperCase();
//     const message = `${updateName} is my friend`
//     return message;
// });

// console.log(friendsToUpperCase)

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Array.prototype.filter() - перебирає оригінальний масив поелементно за умовою, та вертає новий масив елементів які відповідають цій умові
//                            якщо колбек вертає TRUE, тоді елемент додається, якщо повертає FALSE тоді елемент не додається; 


// Array.prototype.find - поелементно перебирає оригінальний масив, повертає перший елмент який задовільняє умову
        // ⬇️⬇️⬇️⬇️⬇️
        // const tasks = ['html', 'css', 'js']

        // const findElement = task.find((task) => task === 'css')
        // console.log(findElement);


// Array.prototype.every() - поелементо перебирає оригінальний масив, та повертаэ тру, якщо всі елементи задовільняють умову
        // ⬇️⬇️⬇️⬇️⬇️
        // const playlist = {
        //     playListName: "My favorite songs",
        //     genre: ["Rock", "Pop"],
        //     songs: [
        //         {
        //             songName: "Пес Патрон",
        //             singer: "KARTA SVITU",
        //             year: 2023,
        //             isPopular: true
        //         },
        //         {
        //             songName: "BAIXO",
        //             singer: "xxanteria",
        //             year: 2023,
        //             isPopular: true
        //         },
        //         {
        //             songName: "Місто",
        //             singer: "onuka",
        //             year: 2015,
        //             isPopular: false
        //         },
        //     ]}
        // const isAllNew = songs.every((song) => song.year > 2010);
        // console.log(isAllNew);


// Array.prototype.some() - перебирає масив поелементно і вертає тру якщо хоча б один елемент масиву задовільняє умову
        // ⬇️⬇️⬇️⬇️⬇️
        // const playlist = {
            //     playListName: "My favorite songs",
            //     genre: ["Rock", "Pop"],
            //     songs: [
            //         {
            //             songName: "Пес Патрон",
            //             singer: "KARTA SVITU",
            //             year: 2023,
            //             isPopular: true
            //         },
            //         {
            //             songName: "BAIXO",
            //             singer: "xxanteria",
            //             year: 2023,
            //             isPopular: true
            //         },
            //         {
            //             songName: "Місто",
            //             singer: "onuka",
            //             year: 2015,
            //             isPopular: false
            //         },
            //     ]}

            // const isOnePopular = songs.some((song) => song.isPopular);

            // console.log(isOnePopular)
            
            // const isOneOldSong = songs.some((song) => song.year < 2000);
            
            // console.log(isOneOldSong);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18];

// const filterNums = nums.filter((num) => num > 10);

// console.log(filterNums);

////////////////////////////////////////////////////////////

// const playlist = {
//     playListName: "My favorite songs",
//     genre: ["Rock", "Pop"],
//     songs: [
//         {
//             songName: "Пес Патрон",
//             singer: "KARTA SVITU",
//             year: 2023,
//             isPopular: true
//         },
//         {
//             songName: "BAIXO",
//             singer: "xxanteria",
//             year: 2023,
//             isPopular: true
//         },
//         {
//             songName: "Місто",
//             singer: "onuka",
//             year: 2015,
//             isPopular: false
//         },
//     ]}

// const findSong = song.find((song) => song.year < 2020)

// const popularSongs = songs.filter((song) => song.year > 2020);

// console.log(popularSongs);

const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
  ];

const adultObjects = people.filter((human) => human.age > 18); 

const adultsName = adultsArray.map((human) => human.name);

console.log(adultsName);
