const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController')

router.post('/usuarios', usuarioController.cadastrar);
router.get('/usuarios', usuarioController.listar)

module.exports = router