const createPerson = (name, birthPlace) => {
  return {
    name,
    birthPlace,
    isAlive: true
  }
}
const newPerson = createPerson("Obama", "Not America", true)


function createChracter(head, body, arms, legs) {
  return {
    head, body, arms, legs
  }
}
function createChracter(head, body, arms, legs) {
  return {
    head: head,
    body: body,
    arms: arms,
    legs: legs
  }
}

const rl = require('readline-sync');

const characterCreation = (name, species, specialty) => {
	return {
		name: name,
		species: species,
		specialty: specialty,
		level: 0,
		abilities: []
	}
}

console.log('Create character!');
const name = rl.question('Choose a name ');
const species = rl.question('Choose a species ');
const specialty = rl.question('Choose specialty ');

const player = characterCreation(name, species, specialty);
console.log(player);


const MOVIES_LIST = [
  ["The Shawshank Redemption", 1994, true],
  ["The Godfather", 1972, true],
  ["The Dark Knight", 2008, true],
  ["Pulp Fiction", 1994, true],
  ["Goodfellas", 1990],
]

//ORIGINAL
const Movie = (title, year, watched = false) => {
  return {
    title,
    year,
    watched
  }
}
const CreateMovie = (element) => {
  return element.map(el => {
    return Movie(...el)
  })
}
const myMovies = CreateMovie(MOVIES_LIST)

//REFRACTORED
const Movie = (title, year, watched = false) => ({ title, year, watched })
const CreateMovie = element => element.map(el => Movie(...el) )
const myMovies = CreateMovie(MOVIES_LIST)
console.log(myMovies)
