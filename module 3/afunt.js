//ES6 module has one feature as  a arrow function 

const { default: test } = require("node:test");



let test1 = ()=>  // This is a regular function, not an arrow function
{
    console.log(1);
}

let test2 = a => console.log(a*2);


let test3 = (a , b) => {
    console.log(a+b);
}

test1();
test2(5);               
test3(5,10); 