const express = require('express');
const router = express.Router();
const generoController = require('../controllers/genero.controller');

router.get('/', generoController.obtenerTodos);
router.post('/', generoController.crear);
router.put('/:id', generoController.actualizar);

module.exports = router;