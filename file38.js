// objects -> objects in javascript are the most important data type and form the building blocks for modern javascript.
// these objects are quite different from javascript's
// arrays are gud but not sufficient
// for real world data 
// objects store key value pairs
// objects dont have index 

// javascript object wo properties ka collection hai. jaha pr properties ka ek name
// aur ek value hoti hai jo hash , map ya or languages me dicionary ke similar hota hai
// object me hamsha curly{} use hote hain
// javascript object me aap easily kisi action ko as a method represent kiya jaata hai
// aur need ke according methods ko object me add / remove bhi kar sakte hai.

// how to create objects 

// const person = {name : "harshit" , age :22};
// const person = {
//     name : "harshit" ,
//     age : 22 ,
//     hobbies : ["singing" , "travel" , "music"]
// }
// console.log(person);

// const person = {
//     name : 'amaan',
//     age : 25,
//     gender : 'male'
// }
// console.log(person);
// console.log(person['name']);
// console.log(person.gender);

// how to access data from objects 

// console.log(person["name"]);
// console.log(person.age);
// console.log(person.hobbies);

// how to add key value pair to objects 
// person["gender"] = "male";
// console.log(person);

// const person = {name: "zani" , age: 24 };
// const person = {
//     name: "zani",
//     age: 24,
//     hobbies: ["singing" , "travel" , "music"]
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// person["gender"] = "male";
// console.log(person);

const person  = {
    name : "zani",
    age : 25,
    hobbies : ["singing" , "traveling" , "games"]  
}
console.log(person.name);
console.log(person.age);
console.log(person["hobbies"]);

person["gender"] = "male";
console.log(person)

// const person = {
//     name : "amaan",
//     age : 24,
//     hobbies : ["singing" ,"travel" , "music"]
// }
// console.log(person);

// console.log(person["name"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);