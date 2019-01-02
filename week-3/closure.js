//BUGs
let count = 0
function countBirds() {
  count += 1
  return count + ' birds'
}
function countDogs() {
  count += 1
  return count + ' dog'
}

//too repetitive
let birdCount = 0
let dogCount = 0
function countBirds() {
  count += 1
  return count + ' birds'
}
function countDogs() {
  count += 1
  return count + ' dog'
}

//error
let birds = 3
function dogHouse() {
  let dogs = 8
  console.log(birds)
  console.log(dogs)
}
console.log(birds)
console.log(dogs)


//closure
let birds = 3
function dogHouse() {
  let dogs = 8
  function showDogs(){
    console.log(dogs)
  }
  return showDogs
}
let getDogs = dogHouse()
getDogs() // 8

//complex
const a = 42
function foo() {
  //foo local scope
  let a = 32
  return function() {
    console.log(a)
  }
}
const bar = foo()
bar() //32
