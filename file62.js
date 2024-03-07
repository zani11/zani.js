// synchronous programming vs Asynchronous programming
// synchronous programming
// synchronous programming - single threaded / as the name suggests synchronous means 
// to be in a sequence , i.e. every statement of the code gets executed one by one.

// Asynchronous programming - asynchronous code allows the program to be executed immediately where the synchronous
// code will block further execution of the remaining code untill it finishes the corrent one. 

// console.log("script start");

// for(let i = 1; i < 10000 ; i++){
//     console.log("inside for loop")
// }

// console.log("script end");

// setTimeout

// console.log("script start");

// setTimeout(() => {
//     console.log("inside setTimeout")
// }, 1000);

// console.log("script end");

// console.log("script start");

// setTimeout(() => {
//     console.log("inside setTimeout");
// }, 0);

// for(let i = 1; i < 100; i++){
//     console.log(".....");
// }
// console.log("script end");

// console.log("script start");

// const id = setTimeout(() => {
//     console.log("inside setTimeout")
// }, 0);

// for(let i = 1; i < 100; i++){
//     console.log(".....");
// }
// console.log("setTimeout id is" , id);
// console.log("clearing time out");
// clearTimeout(id);
// console.log("script end")

