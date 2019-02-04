// Variable scope defines how the variables you declare either can or cannot be accessed at different points in your code.
// Locally scoped let and const variables are only available within the block they are created within

//When you declare a variable in the global scope, it is available everywhere in your code, including across files. Any variable that is declared outside of a block in JavaScript has global scope.

const cat = "meow";
console.log(cat); // meow
function makeCatNoise() {
  console.log(cat);
}
makeCatNoise(); // meow


function makeDogNoise() {
  const dog = "ruff";
  console.log(`The dog says ${dog}!`);
}
makeDogNoise(); // The dog says ruff!
console.log(cat); // meow
console.log(sound); // ReferenceError: sound is not defined


//WHAT WILL THE OUTPUT BE
let cat = "meow";
if( cat === "meow") {
  let dog = "ruff";
}
console.log(dog);


// Hoisting refers to the way the JavaScript interpreter moves all variable and function declarations to the top of the current scope.


console.log(BIRD); // ReferenceError: bird is not defined
const BIRD = "tweet";

console.log(dog); // undefined
var dog = "ruff";



sayHello(); // ReferenceError: sayHello is not defined

let sayHello = () => {
  console.log("Hello!");
}


sayGoodbye()
function sayGoodbye() {
  console.log("goodbye")
}

//  Function expressions are hoisted in the same manner as variables are, since they actually are variables with functions assigned as their values. Therefore, you cannot reference or access them before they are defined.

// Unlike what we have seen up to this point, function declarations hoist both the function definition and its assignment value, so you can use a function defined this way before it is declared.
