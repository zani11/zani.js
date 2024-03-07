// how to iterate object - object iteration ek programming concept hai , 
// jiska mtlb hota hai ki aap ek collection ya data structure ke saare elements ko ek ek
// karke access kr sakte hain. ye typically loops jaise for loop ya while loop ka istemal 
// karke kiya jaata hai . aap ek object ya collection ke har elements par ek action
// apply kar sakte hain, jaise ki usse print karna , modify karna , ya kuch aur.  

// const person = {
//     name : "zani" ,
//     age : 24 ,
//    'person hobbies' : ["singing" , "travel" , "music"]
// }

//for in loop
// object.keys

// for (let key in person){
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
//}

// console.log(Object.keys(person));
// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let keys of Object.keys(person)){
//     console.log(person[keys]);
// }

// const person = {
//     name: "zani",
//     age: 24,
//     "person hobbies" : ["singing" , "travel" , "music"]
// }

// for (let key in person){
//     // console.log(person[key]);
//     console.log(`${key} : ${person[key]}`);
// }

// console.log(Object.keys(person));
// console.log(typeof(Object.keys(person)));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// const person = {
//     name: "zani",
//     age: 24,
//     gender: "male"
// }

// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }

// const person = {
//    name : 'zani',
//    age : 25,
//    gender : 'male'    
// }

// const keys = Object.keys(person);
// for(const key of keys){
//     console.log(`${key} : ${person[key]}`);
// }

// const person = {
//     name : 'zani',
//     age : 25,
//     gender : 'male'
// }

// const values = Object.values(person);
// for (const value of values){
//     console.log(value);
// }


// const person = {
//   name : 'zani',
//   age : 25,
//   gender : 'male'
// }
// const entries = Object.entries(person)
// for(const[key,value] of entries){
//     console.log(`${key} : ${value}`)
// }

// const person = {
//     name : 'zani',
//     age : 24,
//     gender : 'male'
// }
// for(let key of person){
//     console.log(`${key} : ${person[key]}`)
// }


// const person = {
//     name : 'zani',
//     age : 25,
//     gender : 'male'
// }

// for(let key of person){
//     console.log(`${key} : ${person[key]}`)
// }

// const person = {
//     name : 'zani',
//     age : 25,
//     gender : 'male'
// }
// for(let key of person){
//     console.log(`${key}  :  ${person[key]}`)
// }