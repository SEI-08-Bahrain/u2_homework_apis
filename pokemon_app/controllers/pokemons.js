const Pokemon = require('../models/pokemon')

const index = async (req, res) => {
  const pokemons = await Pokemon.getPokemons()
  res.render('pokemons/index', { pokemons })
}

module.exports = { index }
