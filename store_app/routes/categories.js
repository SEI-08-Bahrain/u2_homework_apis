var express = require('express')
var router = express.Router()
const categoriesCtrl = require('../controllers/categories')

/* GET /categories */
router.get('/', categoriesCtrl.index)

module.exports = router
