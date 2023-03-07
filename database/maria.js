const mariadb = require('mysql2/promise');
require('dotenv').config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const getUser = async info => {
  const isEmail = /\S+@\S+\.\S+/.test(info);
  const field = isEmail ? 'email' : 'id';
  const query = `SELECT * FROM users WHERE ${field} = ?`;

  try {
    const [rows, fields] = await pool.execute(query, [info]);
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user');
  }
};

module.exports = {
  pool,
  getUser,
};
