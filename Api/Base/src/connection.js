const sql = require('mssql');

const sqlConfig = {
  user: 'sa',
  password: 'Sql2016!',
  server: '52.179.172.188',
  database: 'LAPAZ',
  trustServerCertificate: true,
};

async function getConnection() {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (error) {
    console.log('Error al conectar a la base de datos:', error.message);
    throw error; // Importante: re-lanzar el error para manejarlo en otro lugar si es necesario
  }
}

module.exports = {
  getConnection: getConnection
};
