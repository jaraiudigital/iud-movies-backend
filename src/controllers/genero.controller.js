const db = require('../config/db');

exports.obtenerTodos = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM generos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.crear = async (req, res) => {
    const { nombre, estado, descripcion } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO generos (nombre, estado, descripcion) VALUES (?, ?, ?)',
            [nombre, estado || 'Activo', descripcion]
        );
        res.status(201).json({ id: result.insertId, message: 'Género creado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, estado, descripcion } = req.body;
    try {
        await db.query(
            'UPDATE generos SET nombre=?, estado=?, descripcion=? WHERE id=?',
            [nombre, estado, descripcion, id]
        );
        res.json({ message: 'Género actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};