# 🎬 IUDigital Movies API - Backend (Entrega 1)

API RESTful monolítica desarrollada con **Node.js**, **Express** y **MySQL** para la gestión de un catálogo de películas y series. Permite administrar de forma relacional géneros, directores, productoras, tipos y películas/series (medias).

---

## 🛠️ Tecnologías Utilizadas

* **Entorno de Ejecución:** Node.js
* **Framework Web:** Express.js
* **Base de Datos:** MySQL
* **Controlador de BD:** `mysql2/promise` (Pool de conexiones)
* **Otras Librerías:** `dotenv` (Variables de entorno), `cors` (Middleware CORS)

---

## 🚀 Requisitos Previos

Asegúrate de tener instalados los siguientes componentes antes de iniciar:

1. **Node.js** (v18 o superior)
2. **MySQL Server** (a través de XAMPP, Workbench o servicio local)
3. **Postman** o **Thunder Client** (para pruebas de endpoints)

---

## 🔧 Instalación y Configuración Local

Sigue estos pasos para clonar, configurar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el Repositorio
```bash
git clone [https://github.com/jaraiudigital/iud-movies-backend.git](https://github.com/jaraiudigital/iud-movies-backend.git)
cd iud-movies-backend

2. Instalar Dependencias(ejecuta en simbolo del sistema )
npm install

3. Configurar Variables de Entorno (.env)
Crea un archivo llamado .env en la raíz del proyecto (backend/.env) con la siguiente estructura de conexión:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=iud_movies_db

4. Crear e Inicializar la Base de Datos

1.Inicia el servicio de MySQL.
2.Crea la base de datos iud_movies_db desde tu cliente MySQL (XAMPP / Workbench):

CREATE DATABASE IF NOT EXISTS iud_movies_db;

3.Ejecuta el script de inicialización para generar las tablas y poblar los datos relacionales verified:
node src/seed.js

5. Iniciar el Servidor Backend
npm run dev
