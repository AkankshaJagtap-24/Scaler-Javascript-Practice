// // The For OF loop allows you to iterate over iterable objects like arrays, strings, and more.
// // It provides a simpler syntax compared to the For IN loop, which is used for iterating
// //including built in string , arrays , array-like objects like NodeList and also map and set .

// var scores =[60, 90,80,57];

// //syntax
// for(var score of scores) {
//     console.log(score);
// } 

// //method
// let colors = ['Red', 'Green', 'Blue'];

// for(var [index, color] of colors.entries()) {
//     console.log(`Index: ${index}, Color: ${color}`);
// }

//string

var str = 'Scaler';
for(var char of str) {
    console.log(char);
}   

//for prinint 1-100
let a = 100; 
for(let i = 1 ; i <= a ; i++){ 
    if( i%2 == 0){ console.log(i); } 
}