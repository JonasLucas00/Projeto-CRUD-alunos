const express = require('express');
const router = express.Router()
const UserController = require('../controllers/userController.js');

router.post('/', UserController.store)
router.post('/deleteAll', UserController.deleteAll)
router.get('/index', UserController.index)
router.get('/show/:id', UserController.show)
router.put('/update/:id', UserController.update)
router.delete('/delete/:id', UserController.delete)
// router.get('/renderUser', UserController.teste)


module.exports = router