//array provides you an orered collection of data

var arr = [12 , "ferrari" , true, 12.3]

console.log(arr);

//accessing the element

var a = arr[1]

console.log(a)

//replacing 
arr[1] = 'akanksha'

console.log(arr);

console.log(arr.length)

// inbuilt js methods

var arr2 = [12,34,45,67]

//pop method

arr2.pop()
//push method
arr2.push(100)
console.log(arr2)

//shift method removes starting element of aray

//arr2.shift()
// and if want to catch the element 
var c = arr2.shift()
console.log(c)
console.log(arr2)

//unshift add at strrting
arr2.unshift("kaveri")
console.log(arr2)