// What is a data type? The classification of different types of data in a language
// string
// number
// boolean
// null
// undefined
// object
// symbol **

console.log(typeof 2)
console.log(typeof "foo")
console.log(typeof [1,2,3])
console.log(typeof true)
console.log(typeof 2 === 2)
console.log(typeof 2 > 2)

//strings
let a = "apple"
let b = 'bear'
// let c = "cat' //error
let d = `car`
console.log(typeof a)

//numbers
let foo = 2
foo = foo + 2
foo += 2
foo -= 2
foo *= 2
foo /= 2
foo % 2
foo++
foo--
const bar = foo + 4
console.log(foo + bar)

//null -> A value that can be assigned to a variable indicating that it has no value
let a = null;

//undefined  -> A value that the browser assigns to a variable when it creates them in memoery
let foo;
console.log(typeof foo)

//object -> An object is a complex datatype that's used to represent complex data
// usually an object is structured as a property/value where each property will hold a value
// an object can be thought of as a container and to access each item you need its key
const obj = { foo: 'bar', isObject: true, list: [1,2,3] }
console.log(obj.foo)
console.log(typeof obj.isObject)

//array -> a type of object that holds values in numerically indexed positions instead of key/value pairs
// an array can be thought of as a list
const arr = [1, 'hello', false, {}, obj]
console.log(arr[0])
console.log(arr[2])
console.log(arr[-1])
console.log(typeof arr)

//coercion -> conversion of one data type to another data type
//explicit
console.log(Number("12"))
5 + "2"
5 - "2"
5 === "5"
5 == "5"

// reference assignment
const foo = [1,2,3]
const bar = foo
bar.push(4)
console.log(foo)
console.log(bar)
