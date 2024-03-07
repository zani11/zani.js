// parameter destructuring =  object destructuring ka use kisi object ke value 
// ko access karne ke liye kiya jaata hai, isme es5 ke object ko access karne
// ke saat es6 ke syntax ko easy kiya gaya h.

// object
// react

// const person = {
//     firstname : "zaniamaan",
//     age : 24,
// }

// function details(obj){
//     console.log(obj.firstname);
//     console.log(obj.age);
// }

// details(person);

// const person = {
//     firstname : "zaniamaan",
//     age: 24,
// }
// function getdetails({firstname , age}){
//     console.log(firstname);
//     console.log(age);
// }
// getdetails(person);

//callback function--> callback functions se function hote hai jo kisi dusre
// function me as an arguments pass kiye jaate hai aur jiss function me ye pass
// kiye jaate hai unhe high order function kehte hai.

// function myfirst(){
//     console.log("hello");
//     function mysecond(){
//         console.log("helloooo");
 
//    }
//    mysecond();
// }
// myfirst();
// mysecond();

// function myfunc(){
//     console.log("hello");
// }

// function mysum(num1 , num2){
//     return num1 + num2;
    
// }
// console.log(mysum(2,2) , (myfunc));
// myfunc();


//function returning function--> jaise hi javascript return statement ke pass jaata hai
// to function ka execute hona ruk jaata hai
// function aksar return value ko calculate karta hai aur return value ko jaha se 
// call kiya gaya hota usko return kar deta hai.

// function myfunc(){
//     function hello(){
//         return "hellosss"
//     }
//     return hello;
// }

// // const ans = myfunc();
// console.log((myfunc));
