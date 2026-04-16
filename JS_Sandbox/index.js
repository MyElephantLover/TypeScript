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

// const IsLoggedIn = false;

// function showWelcome() {
//     return IsLoggedIn && 'Welcome, User';
// }

// console.log(showWelcome());

// const user = {
//     name: 'Ben',
//     address: {city: 'Boston', state: 'MA'}, 
//     hobbies: ['Movie', 'Sports', 'Music']
// };

// const {
//     name,
//     hobbies:[firstHobby, ...otherHobbies]
// } = user;

// console.log(otherHobbies);


// const notes = [
//     {
//         title: 'Meeting Notes',
//         content: 'Discuss project roadmap',
//         isPinned: true
//     },
//     {
//         title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false
//     },
//     {
//         title: 'Workout Plan',
//         content: 'Push day: Bench, Shoulder Press ',
//         isPinned: false
//     },
//     {
//         title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false
//     },
// ];

// const noteTitles = notes.map((note, index) => `${index + 1}.${note.title}`);

// console.log(noteTitles);


// const pinnedNote = notes
// .filter((note) => note.isPinned)
// .map((note) => note.title);
// console.log(pinnedNote);

// const numbers = [1,2,3,4,5];

// const sum = numbers.reduce((total, number) => total + number, 0);

// console.log(sum);


// totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);

// console.log(totalCharacters);


// // total is an accumulator

// notes.forEach((note) => console.log(note.title));

// // just run some iteration on each items on an array; does not store it out


const user = {
    name: 'Brad',
};

console.log(user.address?.city);

// 'address?' is optional chaining

let value = 0;
let result = value ?? 'Default Value'; // 0 is not null or undefined, so result will be 0
// using '||' checks faulsy values
// using '??' checks nullish values (null or undefined)
// 0 is falsy, but it is not nullish, so result will be 0, not 'Default Value'

// console.log(result);

console.log(user.address?.city?? 'Unknown');

const notes = ['Meeting Note', 'Grocery List'];
// const newNotes = [...notes, 'Workout Plan'];
// console.log(notes);
// console.log(newNotes);

const newNotes = notes.map((note) => 
    note === 'Grocery List' ? 'Shopping List' : note
);

console.log(newNotes);
console.log(notes);

const User = {
    name: 'John Doe',
    age: 30
};

const NewUser = {
    ...User,
    age: 35
};

console.log(User);
console.log(NewUser);


// In JS, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous and readable manner, avoiding callback hell. 
// A promise can be in one of three states: pending, fulfilled, or rejected. You can use .then() to handle the fulfilled state and .catch() to handle the rejected state.

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved successfully!');
//     }, 2000); // the amount of time we want to wait before the promise is resolved, in milliseconds = 2 seconds
// });

// all we did was to create a promise that will resolve after 2 seconds with the message 'Promise resolved successfully!'

// myPromise.then((message) => { // .then() is used to handle the fulfilled state of the promise, and it takes a callback function that receives the resolved value (in this case, 'message') as an argument
//     console.log(message); // this will log 'Promise resolved successfully!' after 2 seconds
// }).catch((error) => { // .catch() is used to handle the rejected state of the promise, and it takes a callback function that receives the error as an argument
//     console.error('Promise rejected:', error);
// });


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected!');
    }, 2000); // the amount of time we want to wait before the promise is resolved, in milliseconds = 2 seconds
});

myPromise.then((message) => {
    console.log(message);
}) .catch((error) => {
    console.error('Promise rejected:', error);
});

// Now we are using a fetch API to make an HTTP request to a public API that returns a random joke. 
// The fetch() function returns a promise that resolves to the response of the request. 
// We then use .then() to handle the response and extract the JSON data, and another .then() to log the joke to the console. 
// If there is an error during the fetch operation, we catch it with .catch() and log the error message.

fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response) => response.json()) // this will parse the response as JSON
    .then((data) => {
        console.log(`Here's a joke for you: ${data.setup} - ${data.punchline}`);
    }) // this will log the joke to the console
    .catch((error) => {
        console.error('Error fetching joke:', error);
    }); 

const fetchData = async () => { // the same thing as async function fetchData() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json(); // parsing the response as JSON
        console.log(`Here's a joke for you: ${data.setup} - ${data.punchline}`);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }

};

fetchData();


// { key } means we are destructuring the object and getting the value of the key property.
// { parent : {child} } means we are destructuring the parent object and getting the value of the child property.














