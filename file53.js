//iterable - javscript me "iterable" ek aisa concept hai jisse aap data collection
// (jaise ki array , set ,ya string) ke elements ko sequence me access kar skte hai.
// jispe hum for of loop kar sakte hai
// string are iterable

// const firstname = "harshit";
// for(let char of firstname){
//     console.log(char);
// }

// const items = ["item1" , "item2" , "item3"]
//     for(let item of items){
//         console.log(item);
//     }

// const users ={'key1' : 'value1' , 'key2' : 'value2'}
// for(let user of users){
//     console.log(user);
// }

// array like object 
// jinke passs length property hoti hai
// aur jisko hum index se access kar sakte hai
// example :- string

// const firstname = "zaniamaan";
// console.log(firstname.length);
// console.log(firstname[3]);

// sets (it is iterable)
// store data
// sets also have its own methods 
// no index-based access
// order is not guranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3]);
// console.log(numbers);

// const numbers = new Set([1,2,3,3]);
// console.log(numbers);

// const items = ["item1" , "item2" , "item3"]
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2)
// numbers.add(3)
// numbers.add(4)
// numbers.add(5)
// numbers.add(6)
// numbers.add(7)
// numbers.add(8)
// numbers.add(items);
// numbers.add(['item1','item2'])
// numbers.add(['item1','item2'])
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 iss not present")
// }
// console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }

// const myArray = [1,2,2,4,3,5,5,6,8];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length);

var person1 = { name : 'alice'};
var person2 = { name : 'jhon'};

var agemap = new Map();

agemap.set(person1, 24);
agemap.set(person2, 26);

console.log(agemap.get(person1));

