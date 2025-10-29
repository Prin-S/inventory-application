const { body } = require('express-validator');

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

const validateGenre = [
  body('genre').trim()
    .notEmpty().withMessage(`Genre ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Genre ${cannotBeMoreThan50}`)
];

const validateDeveloper = [
  body('developer').trim()
    .notEmpty().withMessage(`Developer ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Developer ${cannotBeMoreThan50}`)
];

const validatePassword = [
  body('password').trim()
    .equals(process.env.DELETE_PASSWORD).withMessage(`Incorrect password`)
];

module.exports = { validateGame, validateGenre, validateDeveloper, validatePassword };