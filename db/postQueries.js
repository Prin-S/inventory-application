const pool = require('./pool');

async function insertGenre(genre) {
  await pool.query('INSERT INTO genres (genre) VALUES ($1)', [genre]);
}

async function insertDeveloper(developer) {
  await pool.query('INSERT INTO developers (developer) VALUES ($1)', [developer]);
}

module.exports = { insertGenre, insertDeveloper };