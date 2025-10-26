const db = require('../db/getQueries');
const dbPost = require('../db/postQueries');
const links = require('../links');
const { body, validationResult } = require('express-validator');

const cannotBeEmpty = 'cannot be empty.';
const cannotBeMoreThan50 = 'cannot be more than 50 characters.';

const validateGame = [
  body('game').trim()
    .notEmpty().withMessage(`Game title ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Game title ${cannotBeMoreThan50}`),
  body('genre')
    .notEmpty().withMessage(`Genre ${cannotBeEmpty}`),
  body('developer')
    .notEmpty().withMessage(`Developer ${cannotBeEmpty}`)
];

const postNewGame = [ validateGame, async (req, res) => {
  const title = 'game';
  const type = 'add';
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, genres, developers, errors: errors.array() });
  }

  await dbPost.insertGame(req.body.game, req.body.genre, req.body.developer);

  res.redirect('/');
}];

const validateGenre = [
  body('genre').trim()
    .notEmpty().withMessage(`Genre ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Genre ${cannotBeMoreThan50}`)
];

const postNewGenre = [ validateGenre, async (req, res) => {
  const title = 'genre';
  const type = 'add';
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, errors: errors.array() });
  }

  await dbPost.insertGenre(req.body.genre);

  res.redirect('/genres');
}];

const validateDeveloper = [
  body('developer').trim()
    .notEmpty().withMessage(`Developer ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Developer ${cannotBeMoreThan50}`)
];

const postNewDeveloper = [ validateDeveloper, async (req, res) => {
  const title = 'developer';
  const type = 'add';
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, errors: errors.array() });
  }

  await dbPost.insertDeveloper(req.body.developer);

  res.redirect('/developers');
}];

module.exports = { postNewGame, postNewGenre, postNewDeveloper };