const express = require('express')
const router = express.Router()

//NewsController
const newsController = require('../app/controllers/NewsController')

router.use('/', newsController.index)

module.exports = router
