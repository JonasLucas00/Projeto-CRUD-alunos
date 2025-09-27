const express = require('express');
const router = express.Router()
const UserController = require('../controllers/userController.js');

router.post('/', UserController.store)
// router.get('/renderUser', UserController.teste)


module.exports = router