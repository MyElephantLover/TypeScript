// // console.log("START");
// const getRectangleArea = (width, height) => width * height;
// const sayHello = () => console.log('Hello!');

// console.log(getRectangleArea(5, 10));
// sayHello();


// const numbers = [1,2,3,4,5];
// const double = numbers.map((number) => number * 2);

// console.log(double);


// function regular(){
//     console.log("Regular");
// }

// regular();

// const arrow = () => console.log("Arrow");

// arrow();

// const person = {
//     name: "Peter",
//     sayHelloRegular: function () {
//         // console.log('Regular: ', this.name);
//         console.log(this);
//     },
//     sayHelloArrow: () => console.log('Arrow: ', this.name),
// };

// // person.sayHelloRegular();

// person.sayHelloArrow();


// const name = 'John';
// const age = '30';
// const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(greeting);

// const formatDate = (timestamp) => {
//     // create a data object
//     const date = new Date(timestamp); // this is a variable declaration statement
    
//     return `${date.toLocaleDateString()}  at  ${date.toLocaleTimeString()}`;
// };

// const note = {
//     title: 'Discuss Project',
//     timestamp: Date.now(),
// }; // because this is one full statement, so semicolon ends after the closing braces

// console.log(`Last edited at ${formatDate(note.timestamp)}`);

// const x = 5;
// return value;
// const obj = {};


// const number = 5;
// let message;

// if (number % 2 === 0){
//     message = 'Even Number';
// } else {
//     message = 'Odd Number';
// }

// console.log(message);

// const number = 2;
// const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';
// console.log(message); 

// const number = 3;
// const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';
// console.log(message);

// const note = {
//     title : 'Meeting note',
//     content : 'Discuss project roadmap',
//     timestamp: Date.now(),
//     isPinned: true,
// };

// const noteText = `
//     Title: ${note.title}
//     Status: ${note.isPinned ? 'Pinned Note' : 'Regular Note'}
//     Last Edited: ${new Date(note.timestamp).toLocaleString()}
//     `;

// console.log(noteText);

const IsLoggedIn = false;

function showWelcome() {
    return IsLoggedIn && 'Welcome, User';
}

console.log(showWelcome());

const user = {
    name: 'Ben',
    address: {city: 'Boston', state: 'MA'}, 
    hobbies: ['Movie', 'Sports', 'Music']
};

const {
    name,
    hobbies:[firstHobby, ...otherHobbies]
} = user;

console.log(otherHobbies);



