const express = require("express")
const router = express.Router()

const indexController = require("./controllers/indexController")
const feedbackController = require("./controllers/feedbackController")

router.get("/", indexController.showHome)
router.post("/salvar-feedback", feedbackController.createFeedback)

module.exports = router;