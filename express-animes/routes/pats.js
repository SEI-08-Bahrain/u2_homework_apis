var express = require('express');
var router = express.Router();
const patsCtrl = require('../controllers/pats')

router.get('/', patsCtrl.patPics)

module.exports = router;
