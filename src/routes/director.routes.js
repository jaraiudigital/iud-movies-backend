const express = require('express');
const router = express.Router();
const directorController = require('../controllers/director.controller');

router.get('/', directorController.obtenerTodos);
router.post('/', directorController.crear);
router.put('/:id', directorController.actualizar);

module.exports = router;