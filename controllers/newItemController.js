const db = require('../db/getQueries');
const links = require('../links');

async function addGame(req, res) {
  const title = 'game';
  const type = 'add';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();

  res.render('form', { links, title, type, genres, developers });
}

function addGenre(req, res) {
  const title = 'genre';
  const type = 'add';

  res.render('form', { links, title, type });
}

function addDeveloper(req, res) {
  const title = 'developer';
  const type = 'add';

  res.render('form', { links, title, type });
}

module.exports = { addGame, addGenre, addDeveloper };