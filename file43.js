// object destructuring - ek technique hai jiska istemal aap objects me specific 
// properties ko bahar nikaalne k liye karte hain. isse aap ek object ke properties
// ko alag-alag variable me assign kar skte hain, jisse aap un properties ko asaani 
// se access kar skte hain. 

// const band = {
//     bandname : "not feel",
//     famoussong : "loveable",
//     year : 2000,
// }

// let {bandname, famoussong, ...other} = band;
// console.log(band);
// console.log(bandname);
// }

// const music = {
//     bandname : "rock",
//     famoussong: "fly",
//      year: 2001
// }
// let{bandname,famoussong, ...year}=music;
// console.log(music);
// console.log(bandname)

// const band = {
//     bandname : "rocking",
//     albumsong : "you",
//     year : 1998
// }
// let{bandname,albumsong}= band;
// console.log(band);

const rockel = {
    bandname : 'atb',
    famoussong : 'love life',
    year : '1987'
}

let {bandname, famoussong, ...year}=rockel;
console.log(rockel)