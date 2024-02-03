const express = require('express');
const router = express.Router();
const jokeController = require ('../controllers/joke')

router.get('/',jokeController.jokechose)

router.get('/single',jokeController.showSingle)

router.get('/twopart',jokeController.showTwoPart)

module.exports = router;