const db = require('../config/db');

// Obtener todos los directores
exports.obtenerTodos = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM directores');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear un nuevo director
exports.crear = async (req, res) => {
    const { nombres, estado } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO directores (nombres, estado) VALUES (?, ?)',
            [nombres, estado || 'Activo']
        );
        res.status(201).json({ id: result.insertId, message: 'Director creado exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar un director existente
exports.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombres, estado } = req.body;
    try {
        await db.query(
            'UPDATE directores SET nombres=?, estado=? WHERE id=?',
            [nombres, estado, id]
        );
        res.json({ message: 'Director actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};