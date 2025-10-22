const db = require('../db/getQueries');
const links = require('../links');

async function addGame(req, res) {
  const title = 'game';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const type = 'add';

  res.render('form', { links, title, genres, developers, type });
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