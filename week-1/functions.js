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
