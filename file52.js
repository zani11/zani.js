//map method--> map()  ek built-in function hai iska use hota hai ek array ke har
// item ko modify karke ya usse ek new format me convert karke dusre array me
// store karne ke liye. 

// const numbers = [2,5,3,7,6];

// function num (number){
//     return number * number;
// }
// const square_numbers = numbers.map(num)
// console.log(square_numbers);

// const numbers = [4,6,8,2,6];

// function num (number){
//     return number * number;
// }
// const multiply = numbers.map(num);
// console.log(multiply);

// const numbers = [2,5,3,8,9,6];

// function num (number){
//     return number + number;
// }
// const item = numbers.map(num)
// console.log(item);

// const numbers = [2,4,12,6,8];

// function num (number){
//     return number * number
// }
// const item = numbers.map(num);
// console.log(item)

// const numbers = [4,2,6,5,4]
// function multiply (number){
//     return number * number;
// }
// const num1 = numbers.map(multiply);
// console.log(num1);

// const numbers = [2,4,6,8,10,12];
// function multiply (number){
//     return number * number;
// }
// const ans = numbers.map(multiply);
// console.log(ans)


// const users = [
//         {userid: 1,firstname: "zani",age: 24},
//         {userid: 2,firstname: "amaan",age: 25},
//         {userid: 3,firstname: "amit",age: 23}
    
//     ]
//     const username = users.map((user)=>{
//         return user.userid
//     })

//     console.log(username);

// const users = [
//       {userid: 1, firstname: "zani", gender: "male"},
//       {userid: 2, firstname: "ravi", gender: "male"},
//       {userid: 3, firstname: "amaan", gender: "male"},
//       {userid: 4, firstname: "riya", gender: "female"}

// ]
// const username = users.map((user)=>{
//     return user.userid
// })
// console.log(username);

// filter method--> javscript me filter() method yaani iska ek use apko ek array
// se wo item nikaalne me help krtaa hai. jo apne ek test ki tarah choose kia ho, aur bd me 
// ek new array provide krta ho.

// const numbers = [1,3,5,8,24,4];

// function checkeven(number){
//     if (number % 2 == 0)
//     return true;
//     else
//     return false;
// }
// let evennumbers = numbers.filter(checkeven);
// console.log(evennumbers);


// const numbers = [2,3,5,6,8,7,10];

// function checkeven (number){
//     if(number%2==0)
//     return true;
//     else
//     return false;
// }
// let even = numbers.filter(checkeven);
// console.log(even);

// const numbers =[3,2,4,8,5,0,10,1]
// function checkeven(number){
//     if(number % 2 === 0)
//     return true;
//     else
//     return false;
// }
// const evennumbers = numbers.filter(checkeven);
// console.log(evennumbers);

//reduce method--> reduce method ek callback function ko accept karta hai,
// jise aap har array element par apply kar skte hain. is callback function me 
// aap do arguments pass karte hain: ek accumlator (initial value) aur current element.
// reduce method har iteration par accumulator ko update karta hai , 
// jisse aap desired result ko gradually build kar skte hain.

// const numbers = [4,2,6,8,1,10];

// const add = numbers.reduce((accumulator , currentvalue)=>{
//     return accumulator + currentvalue;
// });

// console.log(add);

// const words = ["be" , "with" , "you"]

// const add = words.reduce((accumulator , currentvalue)=>{
//     return accumulator + currentvalue;
// });
// console.log(add);


// accumulator , currentvalue , return
//   1              2             3
//   3              4              7
//    7             6              13
//   13            8               21
//    21          12               33

// const usercart =[
//     {productid:1, productname: "mobile", price: 18000},
//     {productid:2, productname: "laptop", price: 40000},
//     {productid:3, productname: "tv", price: 30000},
// ]

// const initialvalue = 0;
// const sumwithinitial = usercart.reduce(
//     (accumulator , currentvalue) => accumulator + currentvalue.price , initialvalue
// );
// console.log(sumwithinitial);

//sort method-> ek array method hai jo array ke elements ko sort karne ke liye 
// istemal hota hai. is method ka istemal aap ascending (default) ya descending
// order mein array elements ko arrange karne ke liye kar skte hain.

// const numbers = [22,12,55,43,98,67,90];
// const newnum = numbers.sort();

// console.log(newnum);

// const num = [44,21,12,76,65,88,94];
// num.sort(function(a,b){
//     return a-b;
// })
// console.log(num)

// const num = [44,21,12,76,65,88,94];
// num.sort(function(a,b){
//     return b-a;

// })
// console.log(num);

// const gifts = ["toys","lights","games"];
// const newgifts =gifts.sort();

// console.log(newgifts);

// const fruits = [`appple` , `mango` , `banana` , `watermelon` ,`guvava`];
// console.log(fruits.sort());

// const names = ["raj" , "varunn" , "mohit" , "aman"];
// function len_compare(a,b){
//     return a.length - b.length;
// }
// names.sort(len_compare);
// console.log(names);

//find method-> ek array method hai jo ek callback function ka istemal karke pehla element,
// dundhne ke liye istemal hota hai, jo callback function ko condition ko satisfy
// karta hai.

// const myArray = ["hello" , "cat" , "dog" , "foods"];
// function islength3(string){
//     return string.length === 3;
// }

// const Array = ["amit" , "saloni" , "ravii" , "luckyyy"];
// function islength4(string){
//     return string.length === 4;
// }
// const ans = Array.find(islength4);
// console.log(ans);

// const ans = islength("cat");
// console.log(ans);

// const ans = myArray.find(islength3);
// console.log(ans);

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const users = [
//     {userid : 1, username: "amaan"},
//     {userid : 2, username: "ravi"},
//     {userid : 3, username: "ajay"},
//     {userid : 4, username: "rohit"},
// ];

// const ans = users.find((user)=>user.userid===3);
// console.log(ans);

// const users = [
//     {userid : 1, username: "amaan"},
//     {userid : 2, username: "ravi"},
//     {userid : 3, username: "ajay"},
//     {userid : 4, username: "rohit"},
// ];

// const ans = users.find((item)=>item.userid===2);
// console.log(ans)







//every method-> ek array method hai jo ek callback function ko istemal karke
// check karta hai ki kya sabhi array elements ek specified condition ko staisfy 
// karte hain ya nahi.

// const numbers = [2,4,6,8,10];

// const ans =numbers.every((number)=>number%2===0);

//callback function ====== true/false (booleans)

//every method ======== true/false (booleans)

// const numbers = [2,4,8,6,8];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);


// console.log(ans);


// const usercart =[
//         {productid:1, productname: "mobile", price: 18000},
//         {productid:2, productname: "laptop", price: 40000},
//         {productid:3, productname: "tv", price: 30000},
//         {productid:3, productname: "macbook", price: 200000},
//     ]
//     const ans =usercart.every((cartitem)=>cartitem.price < 350000)
//     console.log(ans);

//some method-> ek callback function ko accept karta hai, jo do parameters leti hai:
// current element aur current element ka index. callback function ko har array
// element par apply kiya jaata hai, agar kisi ek element par condition satisfy 
// hoti hai to some method true return karta hai. agar koi bhi element condition 
// ko satisfy ni karta ,  to some method false return karta hai.

// const numbers = [2,3,6,7,8,9,10]

//kya ek bhi number aisa hai jo even hai
//true
//false

// const ans = numbers.some((number)=>number%2===0)
// console.log(ans);

// const numbers = [2,5,4,8,7,1,9,6];
// const ans = numbers.some((number)=>number%2===0);
// console.log(ans)



// const usercart =[
//             {productid:1, productname: "mobile", price: 18000},
//             {productid:2, productname: "laptop", price: 40000},
//             {productid:3, productname: "tv", price: 30000},
//             {productid:3, productname: "macbook", price: 200000},
//   ]

//   const ans = usercart.some((cartitem)=>cartitem.price<300000)
//   console.log(ans)

// fill method-> ek javascript method hai jo ek array ke elements ko specific 
// values se fill kardete hain.is method ka use array ke elements ko replace 
// karne k liye hota hai.

// value , start , end------------->

// const myArray = new Array(10).fill(-1);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.fill(0, 3,6);
// console.log(myArray);


// splice method-> ek array hai jo array ke elements ko add, remove, ya replace karne k liye 
// istemal hota hai. iska mtlb hai ki splice method apko array ke specific elements
// ko modify karne ka tareeka deta hai.
// start , delete , insert

// const myArray = ["item1" , "item2" ,"item3"]

//delete
//  const deleteditem = myArray.splice(1, 1);
// console.log("deleted item" , deleteditem);
//insert 
// myArray.splice(1, 0, "item4")

// insert and delete
// myArray.splice(1, 2, "item3" , "item4")
// console.log(myArray);


// const myitem = ["item1" , "item2" , "item3"];
// const deleteditem= myitem.splice(1,1);
// console.log("deleteitem" , deleteditem);



