let express = require("express")

let router = express.Router()

const ctrl = require("../controller/controller")

router.get("/", ctrl.home)

router.get("/pastas", ctrl.pastas)

router.get("/sambosa", ctrl.sambosa)
router.get("/berger", ctrl.berger)
router.get("/desert", ctrl.desert)
router.get("/biryani", ctrl.biryani)
router.get("/pizza", ctrl.pizza)

module.exports = router
