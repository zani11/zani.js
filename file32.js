// how to clone array

// how to concatenate two arrays 

// let array1 = ["item1" , "item2"];
// let array2 = ["item1" , "item2"];
// let newArray = array1.slice(0).concat(["item3" , "item4"]);
// let array2 = [].concat(array1 , ["item3" , "itsem4"]);
//new way
// spread operator

// let onemorearray = ["item3" , "item4"]
// let array2 =[...array1, ...onemorearray]; 

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


// let array1 = ["var1" , "var2"];
// let array2 = ["var1" , "var2"];
// let onemorearray = ["var3" , "var4"];
// let ans = [array1 , array2 ,...onemorearray];
// console.log(ans);

// let Array1 = ["var1" , "var2"];
// let Array2 = ["var1" , "var2"];
// let onemorearray = ["var3" , "var4"];
// let ans = [...Array1,...Array2,...onemorearray];
// console.log(ans)

// let num1 = [1,2,3];
// let num2 = [4,5,6];
// let numbers = [...num1 , ...num2];
// console.log(numbers);

// let num1 = [1,2,3];
// let num2 = [4,5,6];
// let numbers = [...num1 , ...num2];
// console.log(numbers);

let item1 = ["my" , "name" , "is"];
let item2 = ["amaan" , "saeed"];
let add = [...item1 , ...item2];
console.log(add);