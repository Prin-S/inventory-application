const db = require('../db/getQueries');
const links = require('../links');

async function addGame(req, res) {
  const title = 'game';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();

  res.render('form', { title, links, genres, developers });
}

function addGenre(req, res) {
  const title = 'genre';

  res.render('form', { title, links });
}

function addDeveloper(req, res) {
  const title = 'developer';

  res.render('form', { title, links });
}

module.exports = { addGame, addGenre, addDeveloper };