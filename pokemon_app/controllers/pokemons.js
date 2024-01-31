const Pokemon = require('../models/pokemon')

const index = async (req, res) => {
  const pokemons = await Pokemon.getPokemons()
  res.render('pokemons/index', { pokemons })
}

const getAbilities = async (req, res) => {
  const abilities = await Pokemon.abilities(req.params.name)
  res.render('pokemons/abilities', { abilities })
}

module.exports = { index, getAbilities }
