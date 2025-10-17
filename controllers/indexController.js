const db = require('../db/getQueries');
const dbPost = require('../db/postQueries');
const links = require('../links');
const { body, validationResult } = require('express-validator');

async function getAllGames(req, res) {
  const title = 'All Games';
  const games = await db.getAllGamesFromDB();

  res.render('index', { title, links, games });
}

async function getAllGenres(req, res) {
  const title = 'All Genres';
  const genres = await db.getAllGenresFromDB();

  res.render('index', { title, links, genres });
}

async function getAllDevelopers(req, res) {
  const title = 'All Developers';
  const developers = await db.getAllDevelopersFromDB();

  res.render('index', { title, links, developers });
}

async function getSingleGenre(req, res) {
  const genreID = req.params.genre_id;
  const genreEntries = await db.getSingleGenreFromDB(genreID);
  
  if (genreEntries.length == 0) {
    throw new Error('Genre');
  }

  const type = 'Genre';
  const title = genreEntries[0].genre;  
  
  res.render('index', { title, links, type, genreEntries });
}

async function getSingleDeveloper(req, res) {
  const developerID = req.params.developer_id;
  const developerEntries = await db.getSingleDeveloperFromDB(developerID);
  
  if (developerEntries.length == 0) {
    throw new Error('Developer');
  }

  const type = 'Developer';
  const title = developerEntries[0].developer;  
  
  res.render('index', { title, links, type, developerEntries });
}

const cannotBeEmpty = 'cannot be empty.';
const cannotBeMoreThan50 = 'cannot be more than 50 characters.';

const validateGenre = [
  body('genre').trim()
    .notEmpty().withMessage(`Genre ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Genre ${cannotBeMoreThan50}`)
];

const postNewGenre = [ validateGenre, async (req, res) => {
    const errors = validationResult(req);
    const title = 'genre';

    if (!errors.isEmpty()) {
      return res.status(400).render('form', { title, links, errors: errors.array() });
    }

    await dbPost.insertGenre(req.body.genre);

    res.redirect('/');
  }
];

const validateDeveloper = [
  body('developer').trim()
    .notEmpty().withMessage(`Developer ${cannotBeEmpty}`)
    .isLength({ max: 50 }).withMessage(`Developer ${cannotBeMoreThan50}`)
];

const postNewDeveloper = [ validateDeveloper, async (req, res) => {
    const errors = validationResult(req);
    const title = 'developer';

    if (!errors.isEmpty()) {
      return res.status(400).render('form', { title, links, errors: errors.array() });
    }

    await dbPost.insertDeveloper(req.body.developer);

    res.redirect('/');
  }
];

module.exports = { getAllGames, getAllGenres, getAllDevelopers, getSingleGenre, getSingleDeveloper, postNewGenre, postNewDeveloper };