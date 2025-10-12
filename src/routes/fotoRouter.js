const express = require('express');
const router = express();
const FotoController = require('../controllers/fotoController.js');
const authMiddleare = require('../middlewares/authMidlleware.js');

router.post('/', authMiddleare, FotoController.store)
router.get('/index', authMiddleare, FotoController.index)

module.exports = router;