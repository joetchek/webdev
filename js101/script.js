// console.log("Page loaded");

// var website = "https://google.com/";
// var myName = "Joe Tomichek";

// console.log(myName);

// let apples = 1;
// const height = "6'0\"";

const box = document.getElementById("box");
box.innerText = "Something new in here";
box.innerHTML = "<strong>Something new in here</strong>";

//object example, like a dict in python
let person = {
    "name": "Joe",
    "job": "Learning JS",
    "age": 23,
    "favFoods": ["pizza", "spaghetti", "tacos"]
}

console.log(person["age"]);

const course = "Javascript 101";
course.search("101");
let newStr = course.slice(0, 10);
console.log(newStr);

const spaces = "      test      ";
console.log(spaces.trim());

console.log(typeof(course));
let age = "23";
age = Number(age);
console.log(typeof(age));
age = Object(age);
console.log(typeof(age));

const name = "Joe";

newStr = `My name is ${name}`;
console.log(newStr);

let lst = [1,2,3,4,5];
lst.push(6);
console.log(lst);
const item = lst.pop();
console.log(lst);
console.log(item);

//for each loop
lst.forEach(num => {
    console.log(num);
});

const elems = document.querySelector(".this-class");
console.log(elems.innerText);

const elems2 = document.querySelectorAll(".this-class");
console.log(elems2);

const classElem = elems2[3].innerText;
console.log(classElem);

const elements = document.querySelectorAll("li");
elements.forEach(node => {
    node.innerText = "Changed this";
});

//for each with index
elements.forEach((node, index) => {
    node.innerText = `Hello this is item ${index}`;
});

elements.forEach(node => {
    node.classList.add("new-class", "second-class");
});

// rest parameter, numbers is an array, can accept any number of parameters
function addNumbers(...numbers){
    let total = 0;
    for(index in numbers){
        total += numbers[index];
    }

    return total;
}

const total = addNumbers(1, 3, 4, 5);
console.log(total);

//can store a function in objects
//two ways of doing functions in objects
const obj = {
    "func": function(str="Hello World"){
        console.log(str);
    },
    stringRet(){
        console.log("Hello World again");
    },
    "name": "Joe"
}

obj.func();
obj.stringRet();