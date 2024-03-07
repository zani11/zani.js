// classes in javascript 
// The new version of javascript (es6) introduced the use of classes instead of functions.
// prior to es6 , there were only classes and ,functions which are callable objects.

// class emp {
//     constructor (name , age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const emp1 = new emp('zani' , '24 years');
// console.log(emp1.name , ':' , emp1.age);


// class person {
//     constructor (firstname , lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// const person1 = new person('zani' , 'amu');

// console.log(person1.firstname , person1.lastname);

// class person{
//     constructor(name){
//         this.name =  name;
//     }
//     about(){
//         console.log(`hello ${this.name}`);
//     }
// }
// const person1 = new person('zani');
// console.log(person1.name);

// person1.about();

//extend keywords--->

// class profile {
//     constructor(name , age){
//         this.name =  name;
//         this.age = age;
//     }
//     getname(){
//         return this.name;
//     }
//     getage(){
//         return this.age;
//     }
//     getclass(){
//         return this;
//     }
// }

// class student extends profile{
//     constructor(name , age , languages){
//         super(name , age);
//         this.lang = [...languages];
//     }
//     getdetails(){
//         console.log('name : ' + this.name);
//         console.log('age : ' + this.age);
//         console.log('languages : ' + this.lang);
//     }
// }

// var student1 = new student('zani amu' , 24 ,['java' , 'c++' , 'python' , 'javascript']);
// student1.getdetails();