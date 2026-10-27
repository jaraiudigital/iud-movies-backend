const db = require('../config/db');

exports.obtenerTodas = async (req, res) => {
    try {
        const query = `
            SELECT m.*, 
                   IFNULL(g.nombre, 'Sin Género') AS genero_nombre, 
                   IFNULL(d.nombres, 'Sin Director') AS director_nombre, 
                   IFNULL(p.nombre, 'Sin Productora') AS productora_nombre, 
                   IFNULL(t.nombre, 'Sin Tipo') AS tipo_nombre
            FROM medias m
            LEFT JOIN generos g ON m.genero_id = g.id
            LEFT JOIN directores d ON m.director_id = d.id
            LEFT JOIN productoras p ON m.productora_id = p.id
            LEFT JOIN tipos t ON m.tipo_id = t.id
            ORDER BY m.id DESC
        `;
        const [rows] = await db.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.crear = async (req, res) => {
    const { serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id } = req.body;

    try {
        const query = `
            INSERT INTO medias (serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.query(query, [serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id]);

        res.status(201).json({ id: result.insertId, message: 'Media creada exitosamente' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: 'El Serial o la URL ya se encuentran registrados.' });
        }
        res.status(500).json({ error: err.message });
    }
};

exports.actualizar = async (req, res) => {
    const { id } = req.params;
    const { serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id } = req.body;

    try {
        const query = `
            UPDATE medias 
            SET serial = ?, titulo = ?, sinopsis = ?, url = ?, imagen_portada = ?, ano_estreno = ?, genero_id = ?, director_id = ?, productora_id = ?, tipo_id = ?
            WHERE id = ?
        `;
        const [result] = await db.query(query, [serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id, id]);

        if (result.affectedRows === 0) return res.status(404).json({ error: 'Media no encontrada' });
        res.json({ message: 'Media actualizada correctamente', id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.eliminar = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM medias WHERE id = ?', [id]);
        res.json({ message: 'Media eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};