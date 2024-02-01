var express = require('express')
var router = express.Router()
const productsCtrl = require('../controllers/products')

router.get('/', productsCtrl.index)
router.get('/category/:category', productsCtrl.index)
router.get('/:id', productsCtrl.show)

module.exports = router
