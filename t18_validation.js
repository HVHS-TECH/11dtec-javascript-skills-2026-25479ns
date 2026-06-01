/****************************
This is a block comment.
Put your header comment here!
****************************/

console.log("Running t14 arrays_1.js")
console.log("Working with arrays 1 in Javascript")

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

let listArray = [];

function getFormInput(){

    OUTPUT.innerHTML = "";

    const NAME_FIELD = document.getElementById("NAME_FIELD");
    const AGE_FIELD = document.getElementById("AGE_FIELD");
    const MONEY_FIELD = document.getElementById("MONEY_FIELD");

    let userName = NAME_FIELD.value;
    let userAge = AGE_FIELD.value;
    let userMoney = parseFloat(MONEY_FIELD.value);

    //VALIDATION CHECKS

    if (userName === ""|| userAge === "" || isNaN(userMoney)|| CHOOSE_FIELD.value === ""){
        OUTPUT.innerHTML += "<h3 style='color: red;'>Please fill out all fields correctly.</h3>";
        return;
    }

    if (userName.trim().length )

    OUTPUT.innerHTML += "<h2>Welcome to my page, " + userName + "!</h2>";
    OUTPUT.innerHTML += "<p>You are " + userAge + " years old.</p>";
    OUTPUT.innerHTML += "<p>You have $" + userMoney + " in your bank account.</p>";

    if (userMoney >= 5){

        OUTPUT.innerHTML += "<p>A chocolate bar costs $5, so you can afford one.</p>";

        calculateChange("Chocolate Bar", 5);
        calculateChange("Chips", 4);
        calculateChange("Drink", 2.50);

    } else {

        OUTPUT.innerHTML += "<p>A chocolate bar costs $5, You cannot even afford a chocolate bar. Get Out!</p>";
    }


function calculateChange(itemName, itemPrice){

    const MONEY_FIELD = document.getElementById("MONEY_FIELD");

    let userMoney = parseFloat(MONEY_FIELD.value);

    let change = userMoney - itemPrice;

    OUTPUT.innerHTML +=
    "<p>After buying " + itemName +
    ", you would have $" +
    change.toFixed(2) + " left.</p>";
}

cost = CHOOSE_FIELD = document.getElementById("CHOOSE_FIELD");

let chocolateArray = ["You loath chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER!!!"];
let choice = parseInt(CHOOSE_FIELD.value);

if (choice >= 0 && choice <= 3){
    OUTPUT.innerHTML += "<p>" + chocolateArray[choice] + "</p>";
} else {
    OUTPUT.innerHTML += "<p>Invalid choice. Please enter a number between 0 and 3.</p>";
}
}

function getItem(){
    const ITEM_FIELD = document.getElementById("itemField");
    let item = ITEM_FIELD.value;

    listArray.push(item);

    OUTPUT.innerHTML += "<p>You have added '" + item + "' to the list.</p>";

    ITEM_FIELD.value = "";
}

function getList(){
    OUTPUT.innerHTML += "<h3>These are the items on your shopping list:</h3>";

    for (let i = 0; i < listArray.length; i++){
        OUTPUT.innerHTML += "<p>Item " + (i + 1) + ": " + listArray[i] + "</p>";
    }
return userMoney;
}