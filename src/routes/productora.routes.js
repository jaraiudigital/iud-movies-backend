const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/productora.controller');

router.get('/', productoraController.obtenerTodas);
router.post('/', productoraController.crear);
router.put('/:id', productoraController.actualizar);

module.exports = router;