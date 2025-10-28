const db = require('../db/getQueries');
const links = require('../links');

async function updateGame(req, res) {
  const title = 'game';
  const type = 'update';
  const [ selectedGame ] = await db.getSingleGameFromDB(req.params.id);
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();

  res.render('form', { links, title, type, selectedGame, genres, developers });
}

async function updateGenre(req, res) {
  const title = 'genre';
  const type = 'update';
  const [ selectedGenre ] = await db.getSingleGenreFromDB(req.params.genre_id);

  res.render('form', { links, title, type, selectedGenre });
}

async function updateDeveloper(req, res) {
  const title = 'developer';
  const type = 'update';
  const [ selectedDeveloper ] = await db.getSingleDeveloperFromDB(req.params.developer_id);

  res.render('form', { links, title, type, selectedDeveloper });
}

module.exports = { updateGame, updateGenre, updateDeveloper };