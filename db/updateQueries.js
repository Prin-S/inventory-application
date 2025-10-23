const pool = require('./pool');

async function updateGenreInDB(genre_id, genre) {
  await pool.query('UPDATE genres SET genre = ($2) WHERE genre_id = ($1)', [genre_id, genre]);
}

async function updateDeveloperInDB(developer_id, developer) {
  await pool.query('UPDATE developers SET developer = ($2) WHERE developer_id = ($1)', [developer_id, developer]);
}

module.exports = { updateGenreInDB, updateDeveloperInDB };