const db = require('../db/getQueries');

async function deleteGame(req, res) {

  res.redirect('/');
}

async function deleteGenre(req, res) {

  res.redirect('/genres');
}

async function deleteDeveloper(req, res) {

  res.redirect('/developers');
}

module.exports = { deleteGame, deleteGenre, deleteDeveloper };