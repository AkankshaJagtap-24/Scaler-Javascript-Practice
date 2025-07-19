// // forin loop allows you to loop through the properties of an object.
// //The statement of code found within the loop body will be executed once for each property in the object. 

// var colors = {
//     primary : "Blue",
//     secondary : "Red",
//     tertiary : "White"

// }

// //Syntax

// for(var color in colors) {
//     console.log(color + " : " + colors[color]);
// }

// arrays is also  object in js
var colorsArray = ["Blue", "Red", "White"];

for(var color in colorsArray) {
    console.log(color + " : " + colorsArray[color]);
}

// where keys are the index of the array
// and the values are the elements of the array