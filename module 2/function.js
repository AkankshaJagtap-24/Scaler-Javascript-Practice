// // funct are just a piece of code that runs when we call it ,it can also take inputs and passes it

// function greet(){
//     console.log("A")
// }
// greet() // function invokation]

// function add(a , b){
//     console.log(a+b)

// }
// add(3,6)

// let sub = function(c,d){//parameters
//     console.log(c+d)
// }

// sub(3 ,1)// arguments

//Normal function declaration
function greet(){
    console.log("Hello, World!");
}
greet(); // Output: Hello, World! // function invocation

//parameters and agruments
function add(a, b) {
    return a + b; // Returns the sum of a and b
}   
add(5, 3); // Output: 8
add(9,0);

// what is amn expression"

var a = 2+3; // This is an expression that evaluates to 5
console.log(a); // Output: 5


//The function which is declared=by an variable is called anonymous function ,
//which does not have a name and is assigned to a variable.
// Function expression
var add = function(x, y) {
    console.log(x + y); // This function adds x and y
};
add(2, 3); // Output: 5


// Function expression with return
var add = function(a, b) {
    return a + b; // This function returns the sum of a and b
}

var sum = add;

var result = sum(4, 5); // Call the function and store the result
console.log(result); // Output: 9