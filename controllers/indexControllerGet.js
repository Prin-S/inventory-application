const db = require('../db/getQueries');
const links = require('../links');

async function getAllGames(req, res) {
  const title = 'All Games';
  const games = await db.getAllGamesFromDB();
  const type = 'game';
  const empty = false;

  res.render('index', { links, title, games, type, empty });
}

async function getAllGenres(req, res) {
  const title = 'All Genres';
  const genres = await db.getAllGenresFromDB();
  const type = 'genre';
  const empty = false;

  res.render('index', { links, title, genres, type, empty });
}

async function getAllDevelopers(req, res) {
  const title = 'All Developers';
  const developers = await db.getAllDevelopersFromDB();
  const type = 'developer';
  const empty = false;

  res.render('index', { links, title, developers, type, empty });
}

async function getEntriesInSingleGenre(req, res) {
  const [ selectedGenre ] = await db.getSingleGenreFromDB(req.params.genre_id);

  if (!selectedGenre) {
    throw new Error('Genre');
  }

  const title = selectedGenre.genre;
  const genreEntries = await db.getEntriesInSingleGenreFromDB(req.params.genre_id);
  const type = 'genre';

  if (genreEntries.length == 0) {
    empty = true;
  } else {
    empty = false;
  }
  
  res.render('index', { links, title, genreEntries, type, empty });
}

async function getEntriesInSingleDeveloper(req, res) {
  const [ selectedDeveloper ] = await db.getSingleDeveloperFromDB(req.params.developer_id);

  if (!selectedDeveloper) {
    throw new Error('Developer');
  }
  
  const title = selectedDeveloper.developer;
  const developerEntries = await db.getEntriesInSingleDeveloperFromDB(req.params.developer_id);
  const type = 'developer';

  if (developerEntries.length == 0) {
    empty = true;
  } else {
    empty = false;
  }
  
  res.render('index', { links, title, developerEntries, type, empty });
}

module.exports = { getAllGames, getAllGenres, getAllDevelopers, getEntriesInSingleGenre, getEntriesInSingleDeveloper };