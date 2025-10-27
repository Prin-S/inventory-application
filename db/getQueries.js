const pool = require('./pool');

async function getAllGamesFromDB() {
  const rows = await pool.query(`SELECT *
    FROM games
    JOIN genres ON games.genre_id = genres.genre_id
    JOIN developers ON games.developer_id = developers.developer_id
    ORDER BY id`);
  return rows.rows;
}

async function getAllGenresFromDB() {
  const rows = await pool.query('SELECT * FROM genres ORDER BY genre_id OFFSET 1'); // OFFSET 1 to hide the 'unknown' genre
  return rows.rows;
}

async function getAllDevelopersFromDB() {
  const rows = await pool.query('SELECT * FROM developers ORDER BY developer_id OFFSET 1'); // OFFSET 1 to hide the 'unknown' developer
  return rows.rows;
}

async function getSingleGenreFromDB(genre_id) {
  const rows = await pool.query(`SELECT games.id, games.title, genres.genre, developers.developer_id, developers.developer
    FROM games
    JOIN genres ON games.genre_id = genres.genre_id
    JOIN developers ON games.developer_id = developers.developer_id
    WHERE genres.genre_id = ($1)
    ORDER BY id`, [genre_id]);
  return rows.rows;
}

async function getSingleDeveloperFromDB(developer_id) {
  const rows = await pool.query(`SELECT games.id, games.title, genres.genre_id, genres.genre, developers.developer
    FROM games
    JOIN genres ON games.genre_id = genres.genre_id
    JOIN developers ON games.developer_id = developers.developer_id
    WHERE developers.developer_id = ($1)
    ORDER BY id`, [developer_id]);
  return rows.rows;
}

module.exports = { getAllGamesFromDB, getAllGenresFromDB, getAllDevelopersFromDB, getSingleGenreFromDB, getSingleDeveloperFromDB };