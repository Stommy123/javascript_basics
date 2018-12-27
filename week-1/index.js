function sayHello(param) {
  console.log(`hello, ${param}`)
}

const name = "Harry Potter"

function getArea(width, length, unit) {
  const area = width * length
  console.log(`${area} ${unit}`)
}
// getArea(2,4, 'sq ft')

function multiply(x,y) {
  if (typeof x === 'string' || typeof y === 'string') return
  return x * y
}

function even(num) {
  if (num % 2 === 0) {
    console.log("even")
  }
}

const multiplyTwo = function(num) {
  return num * 2
}
// console.log(multiplyTwo(2))

const multiplyThree = num => num * 3

const myFunc = _ => console.log("this is a function")

1 > 2 ? myFunc() : getArea(2,2, 'sq ft')
1 < 2 && myFunc()
