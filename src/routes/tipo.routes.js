const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipo.controller');

router.get('/', tipoController.obtenerTodos);
router.post('/', tipoController.crear);
router.put('/:id', tipoController.actualizar);

module.exports = router;