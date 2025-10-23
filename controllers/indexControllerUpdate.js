const db = require('../db/getQueries');
const dbUpdate = require('../db/updateQueries');
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

const updateGame = [ validateGame, async (req, res) => {
  const title = 'game';
  const type = 'update';
  const games = await db.getAllGamesFromDB();
  const selectedGame = games.find(game => game.id == req.params.id);
  const genres = await db.getAllGenresFromDB();
  const developers = await db.getAllDevelopersFromDB();
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedGame, genres, developers, errors: errors.array() });
  }

  await dbUpdate.updateGameInDB(req.params.id, req.body.game, req.body.genre, req.body.developer);

  res.redirect('/');
}];

const validateGenre = [
  body('genre').trim()
    .notEmpty().withMessage(`Genre ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Genre ${cannotBeMoreThan50}`)
];

const updateGenre = [ validateGenre, async (req, res) => {
  const title = 'genre';
  const type = 'update';
  const genres = await db.getAllGenresFromDB();
  const selectedGenre = genres.find(genre => genre.genre_id == req.params.genre_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedGenre, errors: errors.array() });
  }
  
  await dbUpdate.updateGenreInDB(req.params.genre_id, req.body.genre);

  res.redirect('/genres');
}];

const validateDeveloper = [
  body('developer').trim()
    .notEmpty().withMessage(`Developer ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Developer ${cannotBeMoreThan50}`)
];

const updateDeveloper = [ validateDeveloper, async (req, res) => {
  const title = 'developer';
  const type = 'update';
  const developers = await db.getAllDevelopersFromDB();
  const selectedDeveloper = developers.find(developer => developer.developer_id == req.params.developer_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('form', { links, title, type, selectedDeveloper, errors: errors.array() });
  }

  await dbUpdate.updateDeveloperInDB(req.params.developer_id, req.body.developer);

  res.redirect('/developers');
}];

module.exports = { updateGame, updateGenre, updateDeveloper };