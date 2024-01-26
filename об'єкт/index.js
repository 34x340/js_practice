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
//     ],
//     songsQuantity: {
//         newSongs: 50,
//         oldSongs: {
//             popularSongs: 100,
//         }
//     },
//     showplaylist() {
//         alert(this.playListName);
//     },
//     addSong(songInfo) {
//         this.songs.push(songInfo)
//     },
//     countSongs() {
//         return this.songs.length;  
//     },
//     addGenre(genre) {
//         this.genre.push(genre);
//     },
//     deleteSong(songNameToDel) {
//         this.songs.forEach(song => {
//             if (song.songName === songNameToDel) {
//                 this.songs.splice(this.songs.indexOf(song),1);
//             }
//         });
//     },
//     countPopularSongs() {
//         alert(this.songsQuantity.oldSongs.popularSongs);
//     }
// }

// console.log(playlist, playlist.countSongs());

// playlist.deleteSong("BAIXO");
// // playlist.addGenre('Contry')

// console.log(playlist.playListName)
// console.log(playlist.location.city)
// const city = playlist.location.city
// console.log(city)
// const {playListName} = playlist
// console.log(playListName)
// console.log(playListName)
// const {rating = 0} = playlist
// console.log(rating)

const user = {
    name: 'Joe',
    location: {
        country: 'Ukraine',
        city: 'Lviv',
    },
    password: 1234
}

const {name: userName, location: {country: userCountry, city: userCity}, password: userPassword, follower: userFollower = 0} = user

console.log(userName, userCountry, userCity, userPassword, userFollower)