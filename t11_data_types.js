/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t11_data_types.js")
console.log("Working with data types in Javascript")

// Variables

let name = "Sandro";
console.log(name);

let age = "15";
console.log(age);

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
OUTPUT.innerHTML += "<p>Welcome, "+name+"! </p>";
OUTPUT.innerHTML += "<p>You are "+age+" years old.</p>";
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
    const NAME_FIELD = document.getElementById("nameField");
    const AGE_FIELD = document.getElementById("ageField");
    const MONEY_FIELD = document.getElementById("moneyField");
    
    let userName = NAME_FIELD.value;
    let userAge = AGE_FIELD.value;
    let moneyField = MONEY_FIELD.value;
    
    OUTPUT.innerHTML += "<p>Welcome to my page, " +name+ "</p>";
    OUTPUT.innerHTML += "<p>You are " +age+ " years old.</p>";
}

