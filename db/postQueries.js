const pool = require('./pool');

async function insertGameIntoDB(title, genre_id, developer_id) {
  await pool.query('INSERT INTO games (title, genre_id, developer_id) VALUES ($1, $2, $3)', [title, genre_id, developer_id]);
}

async function insertGenreIntoDB(genre) {
  await pool.query('INSERT INTO genres (genre) VALUES ($1)', [genre]);
}

async function insertDeveloperIntoDB(developer) {
  await pool.query('INSERT INTO developers (developer) VALUES ($1)', [developer]);
}

module.exports = { insertGameIntoDB, insertGenreIntoDB, insertDeveloperIntoDB };