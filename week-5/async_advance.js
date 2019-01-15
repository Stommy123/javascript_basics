const axios = require('axios');
const url = 'http://swapi.co/api'

const getMovies = async apiURL => {
    const requests = [
        axios.get(`${apiURL}/films/1`),
        axios.get(`${apiURL}/films/2`),
        axios.get(`${apiURL}/films/3`)
    ]
    const response = await Promise.all(requests)
    // return response.map(data => data.data.title)
    return response.map(({ data: { title } }) => title)
}

const movies = getMovies(url);

movies.then(data => console.log(data));
