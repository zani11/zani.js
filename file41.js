// computed properties = enable you to create property that can be used to modify manipulate , and
// display data within your components in a readable and efficient manner

// computed property ek object property hai jo dynamic tareke se create hoti hai
// usually ek expression ke adhar par.

// const propertyName = 'color';

// const myobject = {
//     name: "zani",
//     [propertyName]: 'blue',
//     [1+2] : 'three',
// };

// console.log(myobject.name);
// console.log(myobject.color);
// console.log(myobject[3])s

// const dynamickey = "age";

// const person = {
//     name : "zani",
//     [dynamickey]: 30,
//     "country" : "usa",
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person['country']);

const askey = "age"
const person = {
    name : 'zani',
    [askey] : 25,
    "country" : 'india'
}
console.log(person.name)
console.log(person.age)
console.log(person['country'])
// const askey = "age"


// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj)

// const obj = {};
// obj[key1] = "value1",
// obj[key2] = "value2"
// console.log(obj);

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj ={
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);

// const obj={}
//     obj[key1] = "value1",
//     obj[key2] = "value2"
// console.log(obj);

// const class1 = 23;
// const class2 = 32;

// const class3 = 44;
// const class4 = 22;

// const obj={
// [class1] : class3,
// [class2] : class4
// }

// console.log(obj);


// const key = "name";
// const value = 'amaan';

// const user = {};
// user[key] = value;

// console.log(user.name);

// const key = 'objkey1';
// const value = 'value1';

// const user = {};
// user[key] = value;

// console.log(user)


// let names = "words";
// let fullname = {
//     firstname : "Amaan",
//     lastname : "saeed"
// }
// console.log('my fullname is : ' + fullname.firstname+ " " +fullname.lastname);

// let fullname = {
//     firstname : 'zani',
//     lastname : 'amaan'
// }
// console.log('my fullname is : ' + fullname.firstname+ " " +fullname.lastname );

// const mathoperation = {
//     add(a , b) {
//         return a + b;
//     },
//     subtract(a , b) {
//         return a - b;
//     }
// };
// console.log(mathoperation.add(5 , 5));
// console.log(mathoperation.subtract(8 , 5))