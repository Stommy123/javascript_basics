// falsey -> undefined, null, false, 0, NaN, ""
Boolean(0)
Boolean("0")
Boolean(false)
Boolean("false")
Boolean("")
Boolean("hello")
Boolean(1)
console.log(0 === "0")
console.log(false === "false")
&& //  I like peas AND carrots
|| // I'll have strawberry or chocolate icecream
true && true
true && false
true || false
false || true
true && true && false
!true
!false
!!true
!!false
1 !== 1
1 !== "1"
1 != 1
1 != "1"
console.log('dog' && 5)
console.log('dog' || 5)

const cat = "meow"

if (cat=== "meow") {
  console.log("good kitty")
} else {
  console.log("are you really a kitty?")
}

const name = "tommy"
if (name) {
  console.log("thats a name!")
} else {
  console.log("please tell me your name")
}

const money = 100
if (money >= 100) {
  console.log("you're rich")
} else if (money < 100 && money >= 50) {
  console.log("you have some money")
} else if (money < 50 && money > 25) {
  console.log("you're broke")
} else {
  console.log("nigga, are you even trying?")
}


const zoo = [
  {
    species: null,
    name: "Alex"
  },
  {
    species: null,
    name: "Marty"
  },
  {
    species: null,
    name: "Gloria"
  },
  {
    species: null,
    name: "Marvin"
  }
]

zoo.forEach(animal => {
  if (animal.name === "Alex") {
    animal.species = "Lion"
  } else if (animal.name === "Marty") {
    animal.species = "Zebra"
  } else if (animal.name === "Gloria") {
    animal.species = "Hippo"
  } else if (animal.name === "Marvin") {
    animal.species = "Giraffe"
  }
})

zoo.forEach(animal => console.log(`I'm ${animal.name}, the ${animal.species}`))
