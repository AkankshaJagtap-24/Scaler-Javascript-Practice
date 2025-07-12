// //setTimeout for run a funct for an specified delay 
// const timerId = setTimeout(() => {
//     console.log("hello")

// },2000);

// clearInterval(timerId);

//setInterval it runs after an every 2 sec of interval of time

const timerId = setInterval(()=>{
    console.log("hello after every two sec")
},2000);

setTimeout(() =>{
    clearInterval(timerId);

},4000);
