const db = require('../config/db');

// Obtener todos los tipos (Serie, Película, etc.)
exports.obtenerTodos = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM tipos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo tipo
exports.crear = async (req, res) => {
    const { nombre, descripcion } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO tipos (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );
        res.status(201).json({ id: result.insertId, message: 'Tipo creado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un tipo existente
exports.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    try {
        await db.query(
            'UPDATE tipos SET nombre=?, descripcion=? WHERE id=?',
            [nombre, descripcion, id]
        );
        res.json({ message: 'Tipo actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};