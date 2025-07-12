const { log } = require("console");

// regular funct
function greet(){
    console.log("hello");
}
greet();
//IIFE function not need to be called 

(function(){
    console.log("Hello AK");
}) ();