const axios = require('axios');
const url = 'https://swapi.co/api/people'


// const getCharacters = async (apiURL) => {
//     const data = await axios.get(apiURL)
//     return data 
// }

// const foo = getCharacters(url)
// console.log(foo) 
//WRONG


const getCharacters = async apiURL => {
    //NORMAL
    // const data = await axios.get(apiURL)
    // return data.data.results

    //DESTRUCTURED PARTIAL
    // const { data } = await axios.get(apiURL)
    // return data.results

    //DESTRUCTURED FULLY
    // const { data: { results } } = await axios.get(apiURL)
    // return results

    //DESTRUCTURED THEN PARSED
    const { data: { results } } = await axios.get(apiURL)
    return results.map(character => character.name)
    
}

const characters = getCharacters(url);

characters.then(data => console.log(data));
