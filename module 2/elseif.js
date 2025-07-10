// 90 to 100 -A
// 70 to 89 - B
//50 to 69 - C
//lower than 50 - F

var studentScore = 69
if ( studentScore > 90){
    console.log("Yog got an A grade")
}
else if(studentScore >=70 && studentScore <= 89){
    console.log("you got an B grade")
}else if(studentScore >=50 && studentScore <=69){
    console.log("ypu got an C grade")
}
else{
    console.log("youre fail")
}