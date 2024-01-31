var express = require('express')
var router = express.Router()
const valorantRouter = require('../controllers/valorant')

/* GET users listing. */
router.get('/', valorantRouter.allAgents)

module.exports = router
