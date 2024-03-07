// difference between dot and bracket notation 
//dot notation -> dot notation is the most common way to access elements in javascript. to use dot notation , you simply write the name of the object followed by a dot an the name of the property
// you want to access . for ex: if we have an object called "person" with a property called "name" , we would access the name property using person.name 

// dot operator(.)lagakar property ka naam aur values define ki jaati hai
// zaadatar programming languages me isi tareeke se objects create kiya jaata hai

//bracket notation-> bracket notation is less common than dot notation. but it is useful in certain situations. to use bracket notation ,you write the name
// of the object followed by brackets and the property you want to access. for ex: if we have an object called "person" with a property called "name" 
// , we would access the name property using person["name"].

// jab hum bracket notation (),[] use karte hai tb hame har access jaane wali property
// ko string ke roop me specify karna zrori hota hai , bracket notation ko use karne ka faida
// ye hai ki hum object ki property ko ek variable me store karke uss variable ko bracket ko as follows use kar skte hai

// const key = "email";
// const person = {
//     name : "zani" ,
//     age : 24 ,
//    "person hobbies" : ["singing" , "travel" , "music"]
// }
// console.log(person["persson hobbies"]);
// person.key = "kamaan260@gmail.com";
// person[key] = "kamaan260@gmail.com";
// console.log(person);

// const key = "email";
// const person = {
//     name: "zani",
//     age: 24,
//     "person hobbies" : ["singing" , "travel" , "music"]
// }
// console.log(person["person hobbies"]);
// person[key] = "kamaan260@gmail.com";
// console.log(person);


const person = {
    name : 'amaan',
    age : 24,
    gender : 'male'
}
console.log(person.name)
console.log(person["age"])

//bracket ex-
// const car = {};
// const property = "brand";

// car[property] = 'toyota';
// console.log(car)

// car[property] = 'honda';
// console.log(car)

//dot ex-

const car = {};

car.brand = "toyota";
console.log(car)

car.brand = "honda";
console.log(car)