//proto , prototype , class 

// to create objects in different ways-------->

// you can create object in three different ways :
// 1=> using objects literal
// 2=> by creating instance of object directly
// 3=> by using constructor function


// (_)1=> using object literal
// const person = {
//     firstname : 'zani',
//     age : 24,
//     hobbies : ['music' , 'travel' , 'books reading'],
//     about : function(){
//         console.log('hello');
//     },
//     score: {
//         bio: 90,
//         english: 86
//     }
// }
// console.log(typeof person);
// console.log(person.firstname);
// console.log(person.hobbies[1]);
// person.about();
// console.log(person.score.english);

//(--)2=> by creating instance of object directly

// const person = new Object({
//     firstname: 'zanii',
//     age: 24,
//     hoobies: ['music' , 'travel' , 'games'],
//     about: function(){
//         console.log('hello')
//     },
//     score: {
//         bio: 78,
//         english: 67
//     }
// })
// console.log(typeof person);
// console.log(person.firstname);
// person.about();
// console.log(person.score.bio)

//(..)3=> by using constructor function.....>

// function Person (){
//     this.firstname = 'zani',
//     this.age = 24,
//     this.hobbies = ['music' , 'travel' , 'games'],
//     this.about = function(){
//         console.log('hello')
//     };
//     this.score = {
//         bio: 87,
//         english: 76
//     }
// }

// const person = new Person();

// console.log(typeof person);
// console.log(person.firstname)
// console.log(person.age);
// console.log(person.hobbies[1]);
// person.about();
// console.log(person.score.english);