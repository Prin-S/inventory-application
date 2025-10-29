const db = require('../db/getQueries');
const dbPost = require('../db/postQueries');
const links = require('../links');
const validators = require('../validators');
const { validationResult } = require('express-validator');

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

const postNewGame = [ validators.validateGame, async (req, res) => {
  const title = 'game';
  const type = 'add';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, genres, developers, errors: errors.array() });
  }

  await dbPost.insertGameIntoDB(req.body.game, req.body.genre, req.body.developer);

  res.redirect('/');
}];

const postNewGenre = [ validators.validateGenre, async (req, res) => {
  const title = 'genre';
  const type = 'add';
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, errors: errors.array() });
  }

  await dbPost.insertGenreIntoDB(req.body.genre);

  res.redirect('/genres');
}];

const postNewDeveloper = [ validators.validateDeveloper, async (req, res) => {
  const title = 'developer';
  const type = 'add';
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, errors: errors.array() });
  }

  await dbPost.insertDeveloperIntoDB(req.body.developer);

  res.redirect('/developers');
}];

module.exports = { addGame, addGenre, addDeveloper, postNewGame, postNewGenre, postNewDeveloper };