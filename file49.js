// function inside function = javascript mein ek function doosre function ke andar 
// define kiya jaa skta hai, aur usse "function inside function" ya "nested function"
// kaha jaata hai.

// const app = () => {
//     console.log("inside app");

//     const plus = (num1 , num2) => {
//         return num1 + num2;
//     }
//     console.log(plus(8,9));
// }

// app();

// const app = () => {
//     console.log("hello")

//     const add = (num1 , num2) =>{
//         return num1 + num2;
//     }
//     console.log(12+11)
// }
// app();

// const app = () => {
//     console.log("inside app")

//     const plus = (num1 , num2) => {
//         return num1 * num2;
//     }
//     console.log(plus(12,12))
// }
// app();

//lexical scope --> lexical scope ye hai ki variable ka scope ya uski visiblity code likhne
// ke wqt decide hota hai, yaani compile time par.

// lexical scope do tarah ke scope hote hain->
// 1. global scope = ye scope program ke bahar global context mein hota hai.
// global scope mein declare kiye gae variable ya function pure programm k liye,
// accessible hote hain.

// 2. local scope = yeh scope kisi specific function ya block ke andar hota hai
// variable ya function jo ek function me declare kiye gaye hote hain,
// sirf uss function ke andr hi accessible hote hain. 

// function myapp(){

//     const var1 = ("value34");
// const plus = (num1 , num2) => {
//     return num1 + num2;
// }
    
//     console.log("apps world" , var1 , plus(8,9));
// }
// myapp();

// function myapp(){

//     const var1 = ("value12");
//     const add = (num1 , num2) => {
//         return num1 + num2;
//     }
//     console.log("apps" , var1 , add(5,5));
// }
// myapp();


//block scope vs function scope----------;


//let and const are block scope----------;
//var is function scope------------------;

// {
//     let var1 = ("item2");
//     console.log(var1);
// }
// console.log(var1);

// {
//     function mobile(){
//         console.log("myapps");
//     }
//     // mobile();
// }
// mobile();

// {
//     var mymobile = "hello";
// //     console.log(mymobile);
// }

// console.log(mymobile);

// default parameter--> function call karte time agar value pass ki gai hai,
// to passed value use hogi otherwise default value use hogi.

// function plus (num1 , num2=4){
//     return num1 + num2;
// }
// console.log(plus(8));

// rest parameter--> rest parameter function ka aisa parameter hai, 
// jo ki function calling argument ko ek hi parameter me store kar skte hn.

// function myfunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myfunc(4,6,8,9,6,4,2);

// function addsum(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;

//     }
//     return total;
    // console.log(numbers);
    // console.log(Array.isArray(numbers))
// }
// console.log(numbers);
//     console.log(Array.isArray(numbers))

// const ans = addsum(1,2,3,4,5,6);
// console.log(ans);