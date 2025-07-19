var a =21;
var a = 35;//redeclaration of var 

console.log(a);

if(a== 35){
    var b = 40
    console.log(b);
}

console.log(b); 
// b is accessible here due to function scope of var

function test() {
    var c = 50;
    console.log(c);
}
test();
