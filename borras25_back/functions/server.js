const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Endpoint para obtener datos de la tabla 'Usuario'
app.get('/api/usuarios', (req, res) => {
  const query = 'SELECT id_usuario, usuario, passw, fk_servicio_contratado, fk_tipo_usuario FROM Usuario';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Error retrieving data');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
