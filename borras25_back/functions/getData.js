// borras25_back/functions/getData.js
const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: process.env.MYSQL_ADDON_PORT,
});

connection.connect();

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id_usuario, usuario, passw, fk_servicio_contratado, fk_tipo_usuario FROM Usuario';
    connection.query(query, (error, results) => {
      if (error) {
        return reject({
          statusCode: 500,
          body: JSON.stringify(error),
        });
      }
      resolve({
        statusCode: 200,
        body: JSON.stringify(results),
      });
    });
  });
};
