const { resolve } = require("path");

const data = { name : "John" , age: 30};

function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000 );
    })

}
fetchData().then(
    data => {
        console.log("DAta:", data);
    }).catch(err => {
        console.log("Error",err);
    })