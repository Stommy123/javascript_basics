let emptyArray = []
let myAry = [1, "two", 3, "four", 5]
console.log(emptyArray[0])
console.log(emptyArray[1])
console.log(myAry[0])
console.log(myAry[3])
console.log(myAry.length)
myAry.push("foo")
console.log(myAry)
myAry.pop()
console.log(myAry)
myAry.shift()
console.log(myAry)
myAry.unshift("bar")
console.log(myAry)
myAry.slice(1,3)
console.log(myAry)

const numberList = [5,1,7]
const fruits = ['apples', 'pears', 'oranges']
console.log(numberList.sort())
console.log(fruits.sort())

fruits.forEach(fruit => {
  console.log(fruit)
})
