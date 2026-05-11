/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t02_variables.js")
console.log("Working with variables in Javascript")

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
welcome();
displayProduct("Chocolate bar", 4);
displayProduct("chip", 3);
displayProduct("drink", "2.50");
OUTPUT.innerHTML += "<br>";
OUTPUT.innerHTML += "<br>";

//Adding it to the doc
OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p>As of " +currentYear + " you are " + userAge + " years old</p>";
tmp = currentYear - userAge;
OUTPUT.innerHTML += "<p>You were born in " + tmp + "</p>";
tmp = userAge+10;
OUTPUT.innerHTML += "<p>In 10 years you will be " + tmp + " years old</p>";
OUTPUT.innerHTML += "<p>You have $" + userMoney + "</p>";
tmp = userMoney/2;
OUTPUT.innerHTML += "<p>You spend half of your money, now you have $" + tmp + "</p>";
tmp = (userMoney/2)+3;
OUTPUT.innerHTML += "<p>Then you get 3 dollars. now you have $" + tmp + "</p>";

//what it's supposed to say
/*
Hi _______

As of ____ you are __ years old

You were born in ____

In 10 years you will be __ years old

You have __ dollars

You spend half of your money, now you have __

Then you get $3, now you have __
*/


console.log("code complete");