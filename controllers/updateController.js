const db = require('../db/getQueries');
const dbUpdate = require('../db/updateQueries');
const links = require('../links');
const validators = require('../validators');
const { validationResult } = require('express-validator');

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

const putExistingGame = [ validators.validateGame, async (req, res) => {
  const title = 'game';
  const type = 'update';
  const [ selectedGame ] = await db.getSingleGameFromDB(req.params.id);
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedGame, genres, developers, errors: errors.array() });
  }

  await dbUpdate.updateGameInDB(req.params.id, req.body.game, req.body.genre, req.body.developer);

  res.redirect('/');
}];

const putExistingGenre = [ validators.validateGenre, async (req, res) => {
  const title = 'genre';
  const type = 'update';
  const [ selectedGenre ] = await db.getSingleGenreFromDB(req.params.genre_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedGenre, errors: errors.array() });
  }
  
  await dbUpdate.updateGenreInDB(req.params.genre_id, req.body.genre);

  res.redirect('/genres');
}];

const putExistingDeveloper = [ validators.validateDeveloper, async (req, res) => {
  const title = 'developer';
  const type = 'update';
  const [ selectedDeveloper ] = await db.getSingleDeveloperFromDB(req.params.developer_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedDeveloper, errors: errors.array() });
  }

  await dbUpdate.updateDeveloperInDB(req.params.developer_id, req.body.developer);

  res.redirect('/developers');
}];

module.exports = { updateGame, updateGenre, updateDeveloper, putExistingGame, putExistingGenre, putExistingDeveloper };