const axios = require('axios')

const getPokemons = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
  const pokemons = response.data.results
  return pokemons
}

module.exports = { getPokemons }
