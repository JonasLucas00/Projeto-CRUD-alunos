const express = require('express');
const router = express();
const loginController = require('../controllers/loginController.js');

router.post('/', loginController.login)


module.exports = router;