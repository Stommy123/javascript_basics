const axios = require('axios');

const url = 'https://swapi.co/api/people'
const characters = []

const fetchCharacters = apiURL => {
    axios.get(apiURL).then(response => {
        return response
    })
}
// //PROMISE PENDING
// fetchCharacters() //PROMISE PENDING


const parseCharacters = data => {
    data.results.forEach(character => characters.push(character.name))
    console.log(characters)
  }

const getCharacters = apiURL => {
    axios.get(apiURL).then(response => {
         // parseCharacters(response)
        // parseCharacters(response.data)
      parseCharacters(response.data);
    });
  }
getCharacters(url)