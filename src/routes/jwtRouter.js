const express = require('express');
const router = express();
const JwtController = require('../controllers/jwtController.js');

router.post('/', JwtController.store)


module.exports = router;