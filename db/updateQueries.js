const pool = require('./pool');

async function updateGenreInDB(genre_id, genre) {
  await pool.query('UPDATE genres SET genre = ($2) WHERE genre_id = ($1)', [genre_id, genre]);
}

module.exports = { updateGenreInDB };