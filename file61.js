// compilation 
// code execution

// why compilation


// how javascript code executes

// what is global exection context ?

// what is local exection context ?

// closures



// console.log(this);
// console.log(window);
// console.log(firstname);
// var firstname = "zani"
// console.log(firstname);
// console.log(myfunc);
// console.log(fullname);
// myfunc();

//function decleration----------->

// function myfunc(){
//     console.log("this is my function")
// }

// var firstname = "zani";
// var lastname = "amu";
// var fullname = firstname + " " + lastname;
// console.log(fullname);


//function expression------------->

// console.log(myfunction);

// var myfunction = function(){
//     console.log("this is my function")
// }

// console.log(myfunction);

// in let case------->

//js:50 Uncaught ReferenceError: Cannot access 'firstname' before initialization

// console.log(firstname);
// let firstname = "zani";
// console.log(firstname);


// console.log("hello world");
// let firstname = "zani";
// let lastname = "amu";

// const myfunction =function(){
//     let var1 = "firstvariable";
//     let var2 = "secondvariable";
//     console.log(var1);
//     console.log(var2);
// }

// function execution context------->

// let foo = "foo";
// console.log(foo);
// function getfullname(firstname , lastname){
//     // console.log(arguments[0]);
//     // console.log(arguments.length)
//     console.log(arguments)
//     let myvar = "var inside func";
//     console.log(myvar);
//     const fullname = firstname + " " + lastname;
//     return fullname;
// }

// const personName = getfullname("zani" , "amu");
// console.log(personName);


// lexical environment  ,  scope chain

// const lastname = "saeed";

// const printName = function(){
//     const firstname = "amaan";

//     function myfunction(){
//         console.log(firstname);
//     console.log(lastname);
//     }
// myfunction();
    // console.log(firstname);
    // console.log(lastname);
// }
// printName();



// closures------------->
// closuers : 30-40%
// analyse  : 70-80%
// real example : 100%


// function can return functions

// function outerfunction(){
//     function innnerfunction(){
//         console.log("hello world");
//     } 
//     return innnerfunction;

// }

// const ans = outerfunction();
// // console.log(ans)
// ans();


// function printfullname(firstname , lastname){
//     function printname(){
//         console.log(firstname , lastname);
//     } 
//     return printname;

// }

// const ans = printfullname("Amaan" , "saeed");
// // console.log(ans)
// ans();


// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();


// const myfunction = power => number => number => power;

// function myfunction(power){
//     return function(number){
//         return number ** power
//     }
// }
// const square = myfunction(2);
// const ans = square(3);
// console.log(ans);

// const cube = myfunction(3);
// const ans1 = cube(3);
// console.log(ans1);

// function func(){
//     let counter = 0;
//     return function(){
//         if(counter < 1){
//             console.log("Hi you called me")
//             counter++;
//         }else{
//             console.log("mai already ek baar call ho chuka hu");
//         }

//     }
// }
// const myfunc = func();
// myfunc();
// myfunc();