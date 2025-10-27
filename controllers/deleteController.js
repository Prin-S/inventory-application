const dbDelete = require('../db/deleteQueries');

async function deleteGame(req, res) {
  await dbDelete.deleteGameFromDB(req.params.id);

  res.redirect('/');
}

async function deleteGenre(req, res) {
  await dbDelete.deleteGenreFromDB(req.params.genre_id);

  res.redirect('/genres');
}

async function deleteDeveloper(req, res) {
  await dbDelete.deleteDeveloperFromDB(req.params.developer_id);

  res.redirect('/developers');
}

module.exports = { deleteGame, deleteGenre, deleteDeveloper };