const db = require('../db/getQueries');
const links = require('../links');

async function updateGame(req, res) {
  const title = 'game';
  const type = 'update';
  const games = await db.getAllGamesFromDB();
  const selectedGame = games.find(game => game.id == req.params.id);
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();

  res.render('form', { links, title, type, selectedGame, genres, developers });
}

async function updateGenre(req, res) {
  const title = 'genre';
  const type = 'update';
  const genres = await db.getAllGenresFromDB();
  const selectedGenre = genres.find(genre => genre.genre_id == req.params.genre_id);

  res.render('form', { links, title, type, selectedGenre });
}

async function updateDeveloper(req, res) {
  const title = 'developer';
  const type = 'update';
  const developers = await db.getAllDevelopersFromDB();
  const selectedDeveloper = developers.find(developer => developer.developer_id == req.params.developer_id);

  res.render('form', { links, title, type, selectedDeveloper });
}

module.exports = { updateGame, updateGenre, updateDeveloper };