const express = require('express');
const router = express();
const multer = require('multer');
const multerConfig = require('../config/multerConfig.js')
const FotoController = require('../controllers/fotoController.js');

const uploads = multer({ storage: multerConfig.storage })

router.post('/', uploads.single('foto'), FotoController.testFoto)

module.exports = router;