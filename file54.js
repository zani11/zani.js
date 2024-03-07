// map();
// map is an iterable

// store data in ordered function

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key

// in map you can use anything as key
// like array number string



// objects literal
// key --> string
// key --> symbol

// const person ={
//     firstname : "zaniamaan",
//     age : 24,
//     1 : "one"
// }
// console.log(person.firstname);
// console.log(person["firstname"]);
// console.log(person[1]);

// for(let key in person){
//     console.log(typeof key)
// }

//key value pair
// const person = new Map();
// person.set('firstname' , 'zaniamaan');
// person.set('age' , '24');
// person.set(1,'one');
// console.log(person);
// console.log(person.get('firstname'));
// console.log(person.keys());
// for(let key of person.keys()){
//     console.log(key);
// }

// for(let [key , value] of person){
    // console.log(key);
    // console.log(key , value);
// }

// const person1 = {
//     id : 1,
//     firstname : "zaniamaan"
// }

// const extrainfo = new Map();
// extrainfo.set(person1,{age: 24 , gender: "male"})
// console.log(extrainfo);
// console.log(person1.id);
// console.log(extrainfo.get(person1).age);



// const person = new Map([['firstname' , 'zaniamaan'],['age' , 7]]);
// console.log(person);


// const person = {
//     name: "zaniamaan",
//     age : 24,
//     gender : "male"
// }
// console.log(person);


// const person = new Map()
// person.set('name' , 'zaniamaan');
// person.set('age' , 24);
// person.set('gender' , "male");

// console.log(person);


// const person1 = {
//     id : 1,
//     firstname : "zaniamaan"
// }

// const person2 = {
//     id : 2,
//     firstname : "zani"
// }

// const extrainfo = new Map();
// extrainfo.set(person1,{age:24 , gender: "male"});
// extrainfo.set(person2,{age:26, gender: "male"});

// console.log(person2.firstname);
// console.log(extrainfo.get(person1).gender)
// console.log(extrainfo.get(person2).gender)


// clone using object.assign
 
// heap memory

const obj1={
    key1: "value1",
    key2: "value2"
}

// const new1 = obj;
const new1 ={...obj};

const obj22 = Object.assign({},obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj2);



