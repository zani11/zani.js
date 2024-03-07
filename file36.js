// array destructuring-> destructuring assignment is a javascript expression that allow to unpack values from arrays,or properties from object.
// into distinct variables data can be extracted from arrays , objects , nested objects and assigning to variables.

// ek complex structure ko chote chote parts me baatne ko distructuring kaha jaata hai.
// javascript me data jo arrays ya objects ya properties me store hota hai usse 
// destructuring ke saat individual values ko asaani se extract kia jaata hai.


// const myArray = ["value1" , "value2" , "value3" , "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);

// let [myvar1 , myvar2 ,...mynewArray ] = myArray;
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);
// console.log(mynewArray);

const myArray = ["value1" , "value2" , "value3" , "value4"];
let var1 = myArray[0];
let var2 = myArray[1];
// console.log("value of var1" , var1);
// console.log("value of var2" , var2);

let [myvar1 , myvar2 , ...mynewArray ] = myArray;
console.log("value of myvar1" , myvar1)
console.log("value of myvar2" , myvar2);
console.log(...mynewArray);

// const Array1 = ["item1" , "item2" , "item3" , "item4"];
// // let var1 = Array1[0];
// // let var2 = Array1[1];
// // console.log("value of var1" , var1);
// // console.log("value of var2" , var2);

// let [var1 , var2 ,...Array2] = Array1;
// console.log("value of var1" , var1);
// console.log("value of var2" , var2);
// console.log[Array2];

// const myArray = ["value1" , "value2" , "value3" , "value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);

// let [myvar1 , myvar2 , ...mynewArray] = myArray;
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);
// console.log(mynewArray);

// const myArray = ["value1" , "value2" , "value3" , "value4" ];
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log("value of var1 is" , var1);
// console.log("value of var2 is" , var2);

// let [var1 , var2 , ...mynewarray] = myArray;
// console.log("value of var1 is" , var1);
// console.log("value of var2 is" , var2);
// console.log(mynewarray);


// const myArray = ["value1" , "value2" , "value3" , "value4"];
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log("value of myvar1 is" ,myvar1);
// console.log("value of myvar2 is" ,myvar2);

// let [myvar1 , myvar2 ,...myarraynew]=myArray;
// console.log("value of myvar1 is" , myvar1);
// console.log("value of myvar2 is" , myvar2);
// console.log(myarraynew)