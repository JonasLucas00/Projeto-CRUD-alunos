const express = require('express');
const router = express();
const AlunoController = require('../controllers/alunoController.js');
const authMiddleare = require('../middlewares/authMidlleware.js');

router.get('/', authMiddleare, AlunoController.store);
router.delete('/deleteAll', authMiddleare, AlunoController.destroy);
router.get('/index', authMiddleare, AlunoController.index);
router.get('/show', authMiddleare, AlunoController.show);
router.put('/update', authMiddleare, AlunoController.update);

module.exports = router;