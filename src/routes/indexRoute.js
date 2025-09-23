const express = require('express');
const router = express.Router()
const indexController = require('../controllers/indexController.js');

router.get('/', indexController.renderIndex)
router.get('/criar', indexController.criaUser)
router.get('/localizar', indexController.findData)



module.exports = router