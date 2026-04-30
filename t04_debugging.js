console.log("Task 4 - Debugging");

// 1. Set up variables first so they are defined for calculations
var length = 8;
var width = 10;

// 2. Calculate using defined variables
var area = length * width; 
var perimeter = 2 * (length + width); 

// 3. Display results with correct string concatenation
console.log("An area of a piece of paper with a length of " + length + " and a width of " + width + " is " + area);
console.log("The same piece of paper has a perimeter of " + perimeter);

// 4. Check logic: for these dimensions, area (80) should be larger than perimeter (36)
if (area > perimeter) {
    console.log("Yay, your area is larger, this is right for this example");
} else {
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}
