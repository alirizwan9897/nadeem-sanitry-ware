require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.PGHOST || 'localhost',
  user: process.env.PGUSER || 'postgres',
  port: Number(process.env.PGPORT || 5432),
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE || 'shamadb',
  max: 10,
});
module.exports = pool;