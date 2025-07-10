var person = {
    firstName : "john",
    lastName : "Deo",
    age :40,
    ownsCar : false
};


console.log(person);

//dot notation
console.log(person.age)

//bracket notation

console.log(person['firstName'])

var cap = {
    firstName : "Steve",
    lastName : "Rogers",
    age : 100,
    friends : ['Buck baners' , 'bruce','tony'],
    isAvenger : true,
    address :{
    state : 'New York',
    city :{
            name : 'brooklyn',
            pincode : 12345
        }
    }
}

console.log(cap.friends[1]) //bruce Banner


console.log(cap.address.city.name)
cap.isAvenger = false
console.log(cap)