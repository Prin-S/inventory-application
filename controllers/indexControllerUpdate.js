const db = require('../db/getQueries');
const dbUpdate = require('../db/updateQueries');
const links = require('../links');
const { body, validationResult } = require('express-validator');

const cannotBeEmpty = 'cannot be empty.';
const cannotBeMoreThan50 = 'cannot be more than 50 characters.';

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

module.exports = { updateGenre };