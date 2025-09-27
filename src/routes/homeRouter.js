const express = require('express');
const router = express()
const homeController = require('../controllers/homeController.js')

router.get('/', homeController.render);

module.exports = router;