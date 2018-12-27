//a loop is a function/method that will repeat a specific set of instruction a certain amount of times
// or while a condition is true
// they provide a way to repeat something over again
// keeping your code dry

const reindeers = [
  'Dasher',
  'Dancer',
  'Prancer',
  'Vixen',
  'Comet',
  'Cupid',
  'Dunder',
  'Blixem',
  'Rudolph'
]

const christmasCarols = [
  'Jingle Bells',
  'Twelve Days of Christmas',
  'Santa Clause is coming to Town',
  'Rudolph, the Red Nose Reindeer',
  'Drummer Boy',
  'Jingle Bell Rock',
  'Frosty the Snowman'
]

//for loops are the most low level loops and easiest loop to understand
// other loops are built in methods for javascript and each behave differently
// we are starting our counter (i) at 0, and looping until i is meets a certain condition, until it meets said condition, i will keep incrementing
for (let i = 0; i < 12; i++) {
  console.log(i)
  if (i % 2 === 0) {
    console.log("even!")
  }
}

console.log(reindeers[0])
console.log(reindeers[1])
console.log(reindeers[2])
for (let i = 0; i <  reindeers.length; i++) {
  console.log(i)
  console.log(reindeers)
  console.log(reindeers[i])
}


//while loops begin with the word while followed by a set of parenthesis
// if the condition evaluates true, rthe loop will run till it evaluate false
// careful about ending up in a neverending loop!
let i = 0;
while (i < 12) {
  console.log(i)
  if ( i === 3 ) {
    break;
  }
  i++
}

while (i < reinders.length) {
  console.log(i)
  i++
}


reindeers.forEach(function(reindeer,i) {
  console.log(reindeer)
  console.log(i)
  console.log(`My name is ${reindeer}`)
})

const numbers = [1,2,3]
const doubles = numbers.map(function(num) {
  return nun * 2
})


christmasCarols.filter(function(e) {
  return typeof e === "string"
})

christmasCarols.includes("Foo")


reindeers.reduce(function(result, name) {
  if (result)  {
    return result + " " + name
  }
  else {
    return result + name
  }
}, "")

reindeers.reduce((result,name) => result ? result + " " + name : result + name, "")

numbers.reduce((result, num) => result + num)



const perfectChristmas = {
  food: ['roast beef', 'honey baked ham', 'cookies' ],
  drinks: ['eggnog', 'beer', 'more beer'],
  christmasMusic: christmasCarols,
  christmasMovies: christmasMovies,
  numberOfPresents: 100,
  date: 'December 25th',
  santaClause: true
}

perfectChristmas['food']
for (let key in perfectChristmas) {
  console.log(key)
  console.log(perfectChristmas[key])
}
