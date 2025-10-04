const express = require('express');
const router = express();
const AlunoController = require('../controllers/alunoController.js');

router.get('/', AlunoController.store)
router.delete('/deleteAll', AlunoController.destroy)
router.get('/index', AlunoController.index);

module.exports = router;