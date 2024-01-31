var express = require('express')
var router = express.Router()
const pokemonCtrl = require('../controllers/pokemons')

router.get('/abilities/:name', pokemonCtrl.getAbilities)
router.get('/', pokemonCtrl.index)

module.exports = router
