const links = require('../links');

function addGame(req, res) {
  const title = 'game';

  res.render('form', { title, links });
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