// Strings are used to represent text, and are surrounded by quotes


1 + "1"
"1" + "1"


//string concatenation -> joining two or more strings together
const message = "Hello, good"
const time = "morning"
const name = "Bob"
console.log(message + time + name)

//string interpolation es6
const dueDate = "January 1st"
console.log(`The assignment is due on ${dueDate}`)

//comparing strings
const newName = "John"
const otherName = "Jon"
const thirdName = "John"
console.log(name === otherName)
console.log(name === thirdName)
console.log("apple" < "orange") // true
console.log("Apple" < "Orange") // false

//string methods
const car = "honda"
console.log(car.toLowerCase())
console.log(car.length)
console.log(car[0])
console.log(car.charAt(0))
console.log(car.substr(1))
console.log(car.substring(1))
console.log(car[0] + car.substring(1))
console.log(car.split(""))
