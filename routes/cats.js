const express = require("express")
const router = express.Router()
const catsController = require("../controllers/cats")

router.get("/gif", catsController.getGif)

module.exports = router
