var express = require('express')
var router = express.Router()
const quotesCtrl = require('../controllers/quotes')

/* GET users listing. */
router.get('/', quotesCtrl.index)

module.exports = router
