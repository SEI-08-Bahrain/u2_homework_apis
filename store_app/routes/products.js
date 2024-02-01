var express = require('express')
var router = express.Router()
const productsCtrl = require('../controllers/products.js')

//GET / products/:name
router.get('/categories/:name/', productsCtrl.index)

//GET / products/:id
router.get('/:id', productsCtrl.show)

module.exports = router
