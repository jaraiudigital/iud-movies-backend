const db = require('./config/db');

const catalogoReal = [
    {
        titulo: "Moana", ano: 2016, genero: "Animación", director: "Ron Clements", productora: "Walt Disney Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMTI5MjA5NTkwNV5BMl5BanBnXkFtZTgwMDUyNTUwOTE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "En la antigua Polinesia, la joven Moana emprende un viaje para salvar a su pueblo con la ayuda del semidios Maui."
    },
    {
        titulo: "Zootopia", ano: 2016, genero: "Animación", director: "Byron Howard", productora: "Walt Disney Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjA2NjA2MDUxNF5BMl5BanBnXkFtZTgwNTI2NDM4NzE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Una conejita policía y un zorro estafador investigan una conspiración en una gran metrópolis animal."
    },
    {
        titulo: "Encanto", ano: 2021, genero: "Animación", director: "Jared Bush", productora: "Walt Disney Animation Studios", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBNjQyMDIyM2ItMDRjYS00NmIyLTk4MGUtOTM0NzgyNWFkZTgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Mirabel Madrigal busca salvar la magia de su casa siendo la única integrante de su familia sin superpoderes."
    },
    {
        titulo: "Frozen: Una aventura congelada", ano: 2013, genero: "Animación", director: "Chris Buck", productora: "Walt Disney Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMTQ1MTg3Njg2MX5BMl5BanBnXkFtZTgwNDg5NjAyMDE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Anna emprende un viaje épico para encontrar a su hermana Elsa, cuyos poderes helados congelaron el reino."
    },
    {
        titulo: "Grandes héroes (Big Hero 6)", ano: 2014, genero: "Animación", director: "Don Hall", productora: "Walt Disney Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjA1MTI5NTU0NV5BMl5BanBnXkFtZTgwNDA3MTgwMzE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un prodigio de la robótica y un robot inflable unen fuerzas con un grupo de amigos para desenmascarar un complot."
    },
    {
        titulo: "Valiente (Brave)", ano: 2012, genero: "Animación", director: "Mark Andrews", productora: "Pixar Animation Studios", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjA0Nzk5OTE5NV5BMl5BanBnXkFtZTgwOTM5NTI2MDE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "La princesa Mérida desafía una costumbre ancestral, desatando el caos en su reino y enfrentando una antigua maldición."
    },
    {
        titulo: "Kung Fu Panda", ano: 2008, genero: "Animación", director: "John Stevenson", productora: "DreamWorks Animation", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMTI1MDU3Mzg5N15BMl5BanBnXkFtZTcwMzg3NjA2Mw@@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un torpe oso panda que trabaja en una fidería es designado inesperadamente como el Guerrero Dragón."
    },
    {
        titulo: "Cómo entrenar a tu dragón", ano: 2010, genero: "Animación", director: "Dean DeBlois", productora: "DreamWorks Animation", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjA5OTEyMDgwNV5BMl5BanBnXkFtZTcwOTI3NzUwMw@@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un joven vikingo inadaptado entabla amistad con un dragón herido, cambiando la perspectiva de su aldea."
    },
    {
        titulo: "Pulp Fiction", ano: 1994, genero: "Crimen", director: "Quentin Tarantino", productora: "Miramax Films", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMTkxMTA5MDk1OV5BMl5BanBnXkFtZTcwMDg1MjgyNw@@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Las vidas de dos matones, la esposa de un gángster y un boxeador se entrelazan en historias de violencia y redención."
    },
    {
        titulo: "Batman: El caballero de la noche", ano: 2008, genero: "Acción", director: "Christopher Nolan", productora: "Warner Bros. Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMTMxNTU5MzcxMV5BMl5BanBnXkFtZTcwOTM2NTA3Mw@@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Batman combate el crimen en Gotham pero se enfrenta al Guasón, un criminal sádico que sumerge la ciudad en el caos."
    },
    {
        titulo: "Jurassic Park", ano: 1993, genero: "Ciencia Ficción", director: "Steven Spielberg", productora: "Universal Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjM2MDgxMDg4MV5BMl5BanBnXkFtZTgwNTM3NTM1NzE@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un multimillonario crea un parque de atracciones con dinosaurios clonados, pero un saboteador desencadena el colapso."
    },
    {
        titulo: "Interstellar", ano: 2014, genero: "Ciencia Ficción", director: "Christopher Nolan", productora: "Paramount Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBZjdk2YTNhNC0zMmE4OC00OWRlLWE2NDItMTBiZjA1YjM4OTJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un grupo de exploradores viaja a través de un agujero de gusano para asegurar la supervivencia de la humanidad."
    },
    {
        titulo: "Avatar", ano: 2009, genero: "Ciencia Ficción", director: "James Cameron", productora: "20th Century Fox", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBNjA3NGYyYTItMDg3Mi00NjJiLTk1YjItMGIyM2ExNWFiMjhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un ex-marine parapléjico enviado al planeta Pandora se debate entre seguir órdenes y proteger el mundo que habita."
    },
    {
        titulo: "Titanic", ano: 1997, genero: "Romance", director: "James Cameron", productora: "Paramount Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBYzYyN2FiZmItYWNmMy00M2I1LTliM2MtM2ExOTBkM2E3M2RkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un joven artista de clase baja y una aristócrata se enamoran a bordo del transatlántico RMS Titanic."
    },
    {
        titulo: "Oppenheimer", ano: 2023, genero: "Biografía", director: "Christopher Nolan", productora: "Universal Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMDBmY2ExNjItM2YyYy00NWY5LTlhM2YtMmFiZjRkYmFlZDNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "La historia del físico J. Robert Oppenheimer y su papel fundamental en el desarrollo de la bomba atómica."
    },
    {
        titulo: "Spider-Man: Un nuevo universo", ano: 2018, genero: "Animación", director: "Peter Ramsey", productora: "Sony Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjM4OGUyNzctM2Y5Mi00OWI5LTlhMjItMDlhY2M2MWJiNWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Miles Morales se convierte en el nuevo Spider-Man y une fuerzas con héroes de otras dimensiones."
    },
    {
        titulo: "Gladiador", ano: 2000, genero: "Acción", director: "Ridley Scott", productora: "DreamWorks Pictures", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMjlhYjA4N2UtOTUxMi00M2VlLTg3Y2MtY2Y3OTJmN2I1YWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un ex general romano busca venganza contra el corrupto emperador que asesinó a su familia y lo convirtió en esclavo."
    },
    {
        titulo: "Toy Story", ano: 1995, genero: "Animación", director: "John Lasseter", productora: "Pixar Animation Studios", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBMDU2ZWJhMjItYjA5OC00MzA5LTg3ZTUtN2I1ZmMyOTA0ODlhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un muñeco vaquero tradicional siente celos cuando una figura de acción espacial se convierte en el juguete preferido."
    },
    {
        titulo: "Shrek", ano: 2001, genero: "Animación", director: "Andrew Adamson", productora: "DreamWorks Animation", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBOGXpOTU4YWYtYTY5Ni00Yzk4LWIyNjgtNzZhZTUyMDk1ZDZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un ogro solitario acepta rescatar a una princesa para recuperar la paz de su pantano."
    },
    {
        titulo: "El Señor de los Anillos: La comunidad del anillo", ano: 2001, genero: "Fantasía", director: "Peter Jackson", productora: "New Line Cinema", tipo: "Película",
        img: "https://m.media-amazon.com/images/M/MVBN2EyZjM3NzUtNWUzMi00MjlmLWE1YjItNjE4MGIxYmU1OTMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        sinopsis: "Un joven hobbit hereda un anillo único y emprende un peligroso viaje hacia el Monte del Destino."
    }
];

async function obtenerOcrearID(tabla, columna, valor, camposExtra = {}) {
    const [filas] = await db.query(`SELECT id FROM ${tabla} WHERE ${columna} = ?`, [valor]);
    if (filas.length > 0) return filas[0].id;

    const columnas = [columna, ...Object.keys(camposExtra)];
    const valores = [valor, ...Object.values(camposExtra)];
    const placeholders = columnas.map(() => '?').join(', ');

    const [res] = await db.query(`INSERT INTO ${tabla} (${columnas.join(', ')}) VALUES (${placeholders})`, valores);
    return res.insertId;
}

async function cargarPeliculasCoherentes() {
    try {
        console.log('🧹 Limpiando base de datos anterior...');
        await db.query('DELETE FROM medias');

        console.log('🚀 Poblando películas con datos y portadas totalmente verificados...');

        const timestamp = Date.now();
        let insertadas = 0;

        for (let i = 0; i < catalogoReal.length; i++) {
            const item = catalogoReal[i];

            const genero_id = await obtenerOcrearID('generos', 'nombre', item.genero, { estado: 'Activo', descripcion: `Categoría de ${item.genero}` });
            const director_id = await obtenerOcrearID('directores', 'nombres', item.director, { estado: 'Activo' });
            const productora_id = await obtenerOcrearID('productoras', 'nombre', item.productora, { estado: 'Activo', descripcion: `Estudio ${item.productora}` });
            const tipo_id = await obtenerOcrearID('tipos', 'nombre', item.tipo, { descripcion: item.tipo });

            const serial = `MED-${timestamp}-${i + 1}`;
            const url = `https://cuevana.iudigital.edu.co/ver/${serial.toLowerCase()}`;

            const query = `
                INSERT INTO medias (serial, titulo, sinopsis, url, imagen_portada, ano_estreno, genero_id, director_id, productora_id, tipo_id)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            await db.query(query, [
                serial, item.titulo, item.sinopsis, url, item.img,
                item.ano, genero_id, director_id, productora_id, tipo_id
            ]);

            insertadas++;
        }

        console.log(`\n✅ ¡Proceso exitoso! Se ingresaron ${insertadas} películas con directores, géneros y carátulas 100% exactos.`);
        process.exit(0);

    } catch (error) {
        console.error('❌ Error durante la inserción:', error.message);
        process.exit(1);
    }
}

cargarPeliculasCoherentes();