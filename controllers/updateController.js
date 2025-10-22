const db = require('../db/getQueries');
const links = require('../links');

async function updateGame(req, res) {
  const title = 'game';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const type = 'update';

  res.render('form', { links, title, genres, developers, type });
}

async function updateGenre(req, res) {
  const title = 'genre';
  const type = 'update';
  const genreID = req.params.genre_id;
  const genres = await db.getAllGenresFromDB();
  const selectedGenre = genres.find(genre => genre.genre_id == genreID);

  res.render('form', { links, title, type, selectedGenre });
}

async function updateDeveloper(req, res) {
  const title = 'developer';
  const type = 'update';
  const developerID = req.params.developer_id;
  const developers = await db.getAllDevelopersFromDB();
  const selectedDeveloper = developers.find(developer => developer.developer_id == developerID);

  res.render('form', { links, title, type, selectedDeveloper });
}

module.exports = { updateGame, updateGenre, updateDeveloper };