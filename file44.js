// objects insides array = ka mtlb hota hai ki aap ek array ke andr objects ko store 
// kar rahe hain.yani ki , ek array ke elements object hote hain . isse aap ek
// collection of objects create kar skte hain.
// very usefull in real world applications

// const users = [
//     {userid: 1,firstname: "zani" , gender: "male"},
//     {userid: 2,firstname: "mohit" , gender: "male"},
//     {userid: 3,firstname: "akash" , gender: "male"},
// ]
// for(let user of users){
    // console.log(user);
    // console.log(user.userid);
    // console.log(user.firstname);
// }

// const users = [
//     {userid: 1,firstname: "amaan",age: 24},
//     {userid: 2,firstname: "rahul",age: 20},
//     {userid: 3,firstname: "mohit",age: 18},
    
// ]
// for(let user of users){
//     console.log(user);
//     console.log(user.firstname);
// }


// const users =[
//     {userid: 2,firstname: "zani",age: 20},
//     {userid: 3,firstname: "amaan",age: 21},
//     {userid: 4,firstname: "fozi",age: 23},
//     {userid: 5,firstname: "amu",age: 24},
//     {userid: 6,firstname: "amit",age: 26},

// ]
// for(let user of users){
//     console.log(user.userid);
// }

const users = [
    {userid : 1, firstname : "zani", gender : "male" },
    {userid : 2, firstname : "kajal", gender : "female" },
    {userid : 3, firstname : "ravi", gender : "male" },
    {userid : 4, firstname : "mohit", gender : "male" },

]
for(let user of users){
    // console.log(user)
    console.log(user.firstname)
}