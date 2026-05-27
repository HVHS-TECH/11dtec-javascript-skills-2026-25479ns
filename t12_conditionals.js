/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t10_input_from_HTML.js")
console.log("Working with input from HTML in Javascript")

// Variables

let name = "Sandro";
console.log(name);

let age = "15";
console.log(age);

let $$$ = 5;
console.log($$$);

let hobbies = ["Coding", "Reading", "Cooking"];
console.log(hobbies);

let clothes = ["T-shirt", "Jeans", "Hoddie", "Shoes"];
console.log(clothes);

let isFlooded = true;
console.log(isFlooded);

var number1 = 8;
var number2 = 4;
var answer;

const OUTPUT = document.getElementById("OUTPUT");
const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");

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
writeline();

/***************************
Functions
****************************/
function writeline(){
    //Add a line to the html page
    OUTPUT.innerHTML += "<p>Welcome to the page, Sandro!</p>";
    OUTPUT.innerHTML += "<p>You are 15 years old!</p>";
}

function displayWelcome(name, age){
//Display a welcome message to the user
OUTPUT.innerHTML += "<p>Welcome to the page, "+name+"! </p>";
OUTPUT.innerHTML += "<p>You are "+age+" years old</p>";
}

var myVar = 0;
OUTPUT.innerHTML += "Start: " + myVar + "<br>";

functionOne();
function functionOne(){
myVar = 1;
OUTPUT.innerHTML += "functionOne: " + myVar + "<br>";
}

functionTwo();
function functionTwo(){
myVar = 2;
OUTPUT.innerHTML += "Function Two: " + myVar + "<br>";
}

OUTPUT.innerHTML += "End: " + myVar + "<br>";

function start(){
    console.log("Caution Button was clicked!");
    OUTPUT.innerHTML += "<p>Caution Button was clicked!</p>";
}

function getFormInput(){
    OUTPUT.innerHTML += "<p>Welcome to my page, " + name + "</p>";
    OUTPUT.innerHTML += "<p>You are " + age + " years old.</p>";
}   OUTPUT.innerHTML += "<p>You have $" +$$$ + " in your bank account.</p>";

if (age < 18){
    console.log("You are under 18 years old. Get Out!");
}

if (age >= 18){
    console.log("You are 18 years old or older. Welcome!");
}

if (age == 18){
    console.log("You are exactly 18 years old. Go get the full driver's license!");
}