const axios = require('axios')

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    const pokemons = response.data.results
    return pokemons
  } catch (error) {
    console.error('Error fetching pokimons list:', error)
    res.status(500).send('Error fetching pokimons list')
  }
}

const abilities = async (pokemonName) => {
  const pokemons = await getPokemons()
  const pokemon = pokemons.find((pokimon) => {
    return pokimon.name === pokemonName
  })
  try {
    let abilities = []
    const response1 = await axios.get(pokemon.url)
    const abilitiesArr = response1.data.abilities

    for (let i = 0; i < abilitiesArr.length; i++) {
      const newObj = {}
      newObj.name = abilitiesArr[i].ability.name
      const response2 = await axios.get(abilitiesArr[i].ability.url)
      const abilityInfo = response2.data.effect_entries.find((entrie) => {
        return entrie.language.name === 'en'
      })
      newObj.abilityEffect = abilityInfo.effect
      abilities.push(newObj)
    }

    return abilities
  } catch (error) {
    console.error('Error fetching pokimons abilities:', error)
    res.status(500).send('Error fetching pokimons abilities')
  }
}

module.exports = { getPokemons, abilities }
