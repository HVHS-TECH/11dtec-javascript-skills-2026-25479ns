/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t07_functions_parameters.js")
console.log("Working with functions with parameters in Javascript")

// Variables

let _name = "Sandro";
console.log(_name);

let _age = 15;
console.log(_age);

let hobbies = ["Coding", "Reading", "Cooking"];
console.log(hobbies);

let clothes = ["T-shirt", "Jeans", "Hoddie", "Shoes"];
console.log(clothes);

let isFlooded = true;
console.log(isFlooded);

let welcome


var number1 = 8;
var number2 = 4;
var answer;

answer = number1 + number2;
console.log("add: " + answer);
answer = number1 - number2;
console.log("subtract: " + answer);
answer = number1 * number2;
console.log("multiply: " + answer);
answer = number1 / number2;
console.log("divide: " + answer);

/***************************
Main Code
****************************/
const OUTPUT = document.getElementById("OUTPUT");
OUTPUT.innerHTML += "<p>Added by JavaScript</p>";
OUTPUT.innerHTML += "<p>Hello, Mr. Sandro!</p>";
OUTPUT.innerHTML += "<p>Today is a good day to learn JavaScript</p>";
OUTPUT.innerHTML += "<p>Best of luck with your 1.2 English assessment but don't worry, you've got this</p>";

/***************************
Functions
****************************/
function displayWelcome(_name, _age) {
    OUTPUT.innerHTML += "<p>Welcome to the page, " + _name + "!</p>";
    OUTPUT.innerHTML += "<p>You are " + _age + " years old.</p>";
}