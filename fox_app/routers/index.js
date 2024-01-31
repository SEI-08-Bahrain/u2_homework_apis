var express = require('express')
var router = express.Router()
var foxCtrl = require('../controllers/index')
router.get('/', foxCtrl.index)
module.exports = router
