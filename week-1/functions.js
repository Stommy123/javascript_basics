// functions can be identified by a set of () following the function name
// the curly braces create a 'block' of code that will execute when the function is called
// everything inside the brace will run once the function is called
// to call a function, you type the name of the function followed by a set of ()
// object methods are also functions that are built into the javascript language
// any function without a return will return undefined 
// using return will send the value back up to the function 


function logRandom() {
  const randomNumber = Math.ceil(Math.random() * 5)
  console.log(randomNumber)
}
alert()

function getRandom() {
  const randomNumber = Math.ceil(Math.random() * 5)
  return randomNumber
}
const myRandomNumber = getRandom()

function sayHello() {
  console.log("hello world")
}
sayHello()

const name = "tommy"
function sayHello(name) {
  console.log(`hello ${name}`)
}
sayHello("timmy")
sayHello(name)


function getArea(width, length, unit) {
  const area = width * length
  return area + " " + unit;
}
const myArea = getArea(4,4, 'sq ft')

function multiply(x,y) {
  console.log("i'm about to multiply!")
  console.log(x * y)
  console.log("I'm done multiplying")
}
multiply(2,2)
multiply(2, "foo")
multiply(2)
multiply()

function add(x,y) {
  console.log("starting to add!")
  return x + y
  console.log("added!")
}
add(2,2)
console.log(add(2,2))


function even(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

const multiplyTwo = (x) => {
  return x * 2
}

const multiplyThree = function(x) {
  return x * 3
}

const myFunc = _ => console.log("concise function!")
