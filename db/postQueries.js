const pool = require('./pool');

async function insertGame(title, genre_id, developer_id) {
  await pool.query('INSERT INTO games (title, genre_id, developer_id) VALUES ($1, $2, $3)', [title, genre_id, developer_id]);
}

async function insertGenre(genre) {
  await pool.query('INSERT INTO genres (genre) VALUES ($1)', [genre]);
}

async function insertDeveloper(developer) {
  await pool.query('INSERT INTO developers (developer) VALUES ($1)', [developer]);
}

module.exports = { insertGame, insertGenre, insertDeveloper };