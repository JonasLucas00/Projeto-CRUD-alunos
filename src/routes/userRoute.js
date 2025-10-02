const express = require('express');
const router = express.Router()
const UserController = require('../controllers/userController.js');
const authMiddleware = require('../middlewares/authMidlleware.js')

router.post('/', UserController.store)
router.post('/deleteAll', UserController.deleteAll)
router.get('/index', authMiddleware, UserController.index)
router.get('/show', authMiddleware, UserController.show)
router.put('/update', authMiddleware, UserController.update)
router.delete('/delete', authMiddleware, UserController.delete)
// router.get('/renderUser', UserController.teste)


module.exports = router