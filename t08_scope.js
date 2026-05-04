const output = document.getElementById("output");

var Myvar = 0;
output.innerHTML += "Start: " + Myvar + "<br>";

functionOne();
function functionOne(){
    Myvar = 1;
    output.innerHTML += "Function One: " + Myvar + "<br>";
}

functionTwo();
function functionTwo(){
    Myvar = 2;
    output.innerHTML += "Function Two: " + Myvar + "<br>";
}

output.innerHTML += "End: " + Myvar + "<br>";