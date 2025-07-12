
//This code demonstrates the use of the `call` method to invoke a function with a specific context.
// The `call` method allows you to call a function with a specified `this` value


function cook(ing1 , ing2,ing3){
    console.log(`${this.name} is cooking ${ing1} and ${ing2},${ing3}`);
}
const adam = {
    name: "Adam"};
cook.call(adam, "pasta", "salad","water");

// The `apply` method is similar to `call`, but it takes an array of arguments instead of individual arguments
cook.apply(adam, ["pasta", "salad","water"]);


// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value
// and allows you to pass arguments later.
const cookForAdam = cook.bind(adam,"pasta", "salad","water");

cookForAdam(); // This will invoke the function with the context of `adam` and the specified arguments
// Output: Adam is cooking pasta and salad,water