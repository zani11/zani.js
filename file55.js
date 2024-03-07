// optional chaining - ek feature hai jo javascript me object aur property access
// me errors ko avoid karne me madad karta hai, especially jab aap nested 
// objects ya properties ko access kar rhe hain aur kisi property ya sub-object ka existance 
// uncertain hai.

// const user = {
//     firstname: "harshit",
//     address: {housenumber:"14"}
// }


// console.log(user.firstname);
// console.log(user?.address?.housenumber);



// methods
// function inside objects(methods)-  objects me methods ka use us object ke behaviour aur functionality
// ko define karne ka reuse karne k liye hota hai.  

// function personinfo (){
//       console.log(`person name is ${this.firstname} and person age is ${this.age}`)
// }


// function personinfo(){
//     console.log(`person name is ${this.firstname} and my age is ${this.age}` )
// }

// const Person1 = {
//     firstname: "zani",
//     age: 24,
//     about: personinfo
// }
// const Person2 = {
//     firstname: "amaan",
//     age: 14,
//     about: personinfo
// }   

// const person3 = {
//     firstname: "zaniamaan",
//     age: 12,
//     about: personinfo
// }   

// Person1.about();
// Person2.about();
// person3.about();


//Call() - is method ka use karke aap ek function ko specific object ke saath
// execute kar sakte hain, aur aap arguments ko bhi function ke liye pass kar skte
// hain.

// "use strict";
// function myfunc(){
//     console.log(this)
// }
// myfunc();


// const person1 = {
//     firstname: "Amaan",
//     lastname: "saeed"
// }
// function personintro(){
//     console.log(`${this.firstname} ${this.lastname}`)
// };

// personintro();
// personintro.call(person1)
// personintro.call({firstname: "Zani" , lastname: "amu"})

// const person = {
//     firstname: "amaan",
//     lastname: "saeed"
// }
// function personinfo(){
//     console.log(`${this.firstname} ${this.lastname}`)
// }
// personinfo.call(person);
// personinfo.call({firstname: "zani" , lastname: "amu"})


// const person = {
//     firstname: "Amaan",
//     age: 24
// }
// function personinfo(city,state){
//     console.log(`${this.firstname} is from ${city} ${state} and age is ${this.age}`)
// };

// personinfo.call(person,'moradabad','uttarpradesh')

// const person1 ={
//        firstname: "Amaan",
//        age: 24
// }
// function personinfo(city,state){
//     console.log(`${this.firstname} is from ${city} ${state}`)
// }
// personinfo.call(person1, 'moradabad' , 'uttarpradesh')

// const person1 = {
//     firstname : 'zani',
//     age : 25
// }
// function personinfo(city,state){
//     console.log(`${this.firstname} is from ${city} ${state} and age is ${this.age}`)
// }
// personinfo.call(person1, 'moradabad' , 'uttarpradesh')

//Apply() - isme arguments ek array ke roop mein pass kiye jaate hain. is method,
// ka use typically function ke arguments ko dynamic tarike se pass karne ke
// liye hota hai.

// function sum(num1 , num2){
//     console.log(this + num1 +  num2);
// }
// sum.call(4,4,5);
// sum.apply(4,[4,5]);

// function sum(num1,num2){
//     console.log(this+num1 + num2);
// }
// sum.call(4,6,4)
// sum.apply(4,[6,4]);

//bind() - isse ek naya function create hota hai jiska this value pre-defined
// hota hai . bind() method ka use typically context (this value) ko fix karne ke liye hota hai.

// const personfromUttarpradesh = getperson.bind({state: 'uttarpradesh'});
// function getperson(person){
//     console.log(`${person} is from ${this.state}`);
// }
// getperson.call({state : 'uttarpradesh'} , 'Zani')
// personfromUttarpradesh('Zani');
// personfromUttarpradesh('Amaan');

// const personfromUttarpradesh = getperson.bind({state: 'uttarpradesh'});
// function getperson(person){
//     console.log(`${person} is from ${this.state}`);
// }
// personfromUttarpradesh('Zani')
// personfromUttarpradesh('Amaan')

// const personfromuk= getperson.bind({state: 'uttrakhand'});
// function getperson(person){
//     console.log(`${person} is from ${this.state}`);
// }
// personfromuk('Zani')


// const personfromup = getperson.bind({state:'uttarpradesh'});
// function getperson(person){
//     console.log(`${person} is from ${this.state}`);
// }
// personfromup('zani');

