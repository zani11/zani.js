// understand callbacks

// function myfunc(callback){
//     console.log("function is doing task 1")
//     callback();
// }

// function myfunc2(){
//     console.log("function is doing task 2")
// }

// myfunc(myfunc2);

// function myfunc(callback){
//     console.log("function is doing task 1")
//     callback();
// }

// myfunc( function () {
//     console.log("function is doing task 2")
// });

// function myfunc(callback){
//     console.log("function is doing task 1")
//     callback();
// }

// myfunc(() =>{
//     console.log("function is doing task 2")
// })

// function getTwonumbersadd(number1 , number2 , callback) {
//     console.log(number1 , number2)
//     callback(number1 , number2)
// }

// function addTwonumbers(num1 , num2){
//     console.log(num1 + num2);
// }
// getTwonumbersadd(4,6 , addTwonumbers);


// function that returns promise

//promise resolve = the promise reslove() method in js returns a promise object that is resolved with a given value. 

// let promise = Promise.resolve(17468);

// promise.then(function (val) {
//     console.log(val);
// })


// Promise.resolve(17468).then((value) => console.log(value));

// In array

// const promise = new Promise((resolve,reject) => {
//     setTimeout (() => {
//         resolve([89,45,435]);
//     },1000);
// });
// promise.then(values => {
//     console.log(values[1]);
// })
