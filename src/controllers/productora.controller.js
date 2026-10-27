const db = require('../config/db');

// Obtener todas las productoras
exports.obtenerTodas = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM productoras');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva productora
exports.crear = async (req, res) => {
    const { nombre, estado, slogan, descripcion } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO productoras (nombre, estado, slogan, descripcion) VALUES (?, ?, ?, ?)',
            [nombre, estado || 'Activo', slogan, descripcion]
        );
        res.status(201).json({ id: result.insertId, message: 'Productora creada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una productora existente
exports.actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, estado, slogan, descripcion } = req.body;
    try {
        await db.query(
            'UPDATE productoras SET nombre=?, estado=?, slogan=?, descripcion=? WHERE id=?',
            [nombre, estado, slogan, descripcion, id]
        );
        res.json({ message: 'Productora actualizada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};