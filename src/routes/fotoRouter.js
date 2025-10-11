const express = require('express');
const router = express();
const FotoController = require('../controllers/fotoController.js');

router.post('/', FotoController.testFoto)

module.exports = router;