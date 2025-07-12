const numbers = [1,2,3,4,5];
const double = numbers.map(function(num){ // here map is taking argument as a funstion so it is defined as a higher order function 
    return num * 2;
})