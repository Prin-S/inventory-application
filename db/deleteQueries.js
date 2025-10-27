const pool = require('./pool');

async function deleteGameFromDB(id) {
  await pool.query('DELETE FROM games WHERE id = ($1)', [id]);
}

async function deleteGenreFromDB(genre_id) {
  await pool.query('DELETE FROM genres WHERE genre_id = ($1)', [genre_id]);
}

async function deleteDeveloperFromDB(developer_id) {
  await pool.query('DELETE FROM developers WHERE developer_id = ($1)', [developer_id]);
}

module.exports = { deleteGameFromDB, deleteGenreFromDB, deleteDeveloperFromDB };