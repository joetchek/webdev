"use strict";

//Waiting for html to load
window.onload = function() {
    alert("Pages is loaded");
}

//when you leave the page
window.onbeforeunload = function() {
    //can't do alerts in onbeforeunload
    // alert("you are leaving the page");
    console.log("You are leaving");
    return "You are leaving the site";
}

//can access variables from outside a function in a function
let nameOf = "Joe Tomichek";
function greeting() {
    console.log(`Hello ${nameOf}`);
}
greeting();

//timeout function - example of a callback function parameter
console.log("Waiting 3 seconds");
setTimeout(function() {
    console.log("Do a thing");
}, 3000);

//example of an interval function - runs every 2000 ms only 3 times
let count = 0;
const interval = setInterval(function() {
    console.log("Checking something...");
    count++;

    if(count === 3){
        //clear interval clears the interval
        clearInterval(interval);
        console.log("End of the line");
    }
}, 2000);

//setting the date with the Date object
let d = new Date(2025, 0, 15);
console.log(d);

//destructuring arrays
const months = ["Jan", "Feb", "Dec"];
const [jan, feb] = months;
console.log(jan, feb);

//destructuring objects
const person = {
    'name': "Joe",
    'age': "22",
    'somethingElse': "something else" 
}
const {name, age} = person;
console.log(name, age);

//deleting object properties
delete person['somethingElse'];

//Math library similar to Java

//try catch
try {
    functionThatDoesNotExist();
} 
catch (error) {
    console.warn(error);
}
finally {
    //Do something in here
}

//this keyword in an object
const person2 = {
    'name': "Joe",
    speak() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person2.speak();

// example of this in a function but it doesn't seem to work
// function counter() {
//     if (this.total === undefined){
//         this.total = 1;
//     }
//     else {
//         this.total++;
//     }

//     console.log("Running counter. Total is: ", this.total);
// }

// for (let i = 0; i < 10; i++){
//     counter();
// }

//arrow function
const hello = () => {
    console.log("Hello!");
}
//return function from one line
const hello2 = () => "Hello";
console.log(hello2());

//Javascript classes
class MyClass {
    setName(name){
        this.name = name;
    }
    speak() {
        if(this.name === undefined){
            this.name = "Default";
        }
        console.log(`Hello ${this.name}`);
    }
}

const thing = new MyClass();
//thing.setName("Joe");
thing.speak();

//Javascript constructor 
class Person {
    constructor(name){
        this.name = name;
    }

    greeting() {
        console.log(`Hello to ${this.name}`)
    }
}

const person3 = new Person("Dave");
person3.greeting();

