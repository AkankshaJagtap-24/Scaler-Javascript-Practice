//loops are the statements that we can use to control a flow of the program and to do some repeatative 

// var a = "hello world"

// //the for loop
// for(var i = 0;i <=10 ;i++){
//     console.log(a);
// }

// // you have an array and you have to square each element of that array

var num = [2,3,4,5,6,7,8]

var squaredArray =[]

for(var i =0; i < num.length;i++ ){

    squaredArray.push(num[i] * num[i])

}
console.log(squaredArray)
