const express = require('express')
const router = express.Router()
const factsCtrl = require('../controller/facts')

router.get('/', factsCtrl.index)

module.exports = router
