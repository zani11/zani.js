// new keyword------->

// New keyword in javascript is used to create instance of an object that has constructor function.
// on calling the constructor function with new operator.
// 1. A new empty object is created 
// 2. the new object's internal 'prototype' property (_proto_)is set the same as the prototypeof constructing function
// 3. the 'this' variable is made to point to the newly created object. it binds he properly which is declared with 'this' keyword to the new object. 


// function Fruits(color , taste , seeds){
//     this.color = color;
//     this.taste = taste;
//     this.seeds = seeds;
// }
// const Fruits1 = new Fruits('yellow' , 'sweet' , 1)
// console.log(Fruits1);

// function Person(name , age , gender ){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// const Person1 = new Person('Zani' , 24 , 'male');
// console.log(Person1.name);

// function func(){
//     var c = 1;
//     this.a = 100;
// } 
// //set the function prototype
// func.prototype.b = 200;

// // create an object
// var obj = new func();

// // display the result on console
// console.log(obj.a);
// console.log(obj.b)


// [[[The hasownproperty()]]] --> method in javscript is used to check whether the obejct has the specified property as its own property.
//• prop: it holds the name in the form of string or a symbol of the property to test
// return value : it returns a boolean value indicating whether the object has the given property as its own property.

// function checkproperty(){
//     let exampleobj = {};
//     exampleobj.height = 100;
//     exampleobj.width = 100;

// // checking for existing property
// result1 = exampleobj.hasOwnProperty('height');

// // checking for non existing property
// result2 = exampleobj.hasOwnProperty('length');

// console.log(result1);
// console.log(result2)
// }
// checkproperty();


// const obj1 = {};
// obj1.property1 = 42;

// console.log(obj1.hasOwnProperty('property1'))

// console.log(obj1.hasOwnProperty('tonum'));


// const fruits =['apple' , 'mango' , 'banana' , 'grapes'];

// console.log(fruits.hasOwnProperty(2));

// console.log(fruits.hasOwnProperty(4));