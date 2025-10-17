const db = require('../db/getQueries');
const links = require('../links');

async function getAllGames(req, res) {
  const title = 'All Games';
  const games = await db.getAllGamesFromDB();
  const type = 'none';

  res.render('index', { title, links, type, games });
}

async function getAllGenres(req, res) {
  const title = 'All Genres';
  const genres = await db.getAllGenresFromDB();
  const type = 'none';

  res.render('index', { title, links, type, genres });
}

async function getAllDevelopers(req, res) {
  const title = 'All Developers';
  const developers = await db.getAllDevelopersFromDB();
  const type = 'none';

  res.render('index', { title, links, type, developers });
}

async function getSingleGenre(req, res) {
  const genreID = req.params.genre_id;
  const genres = await db.getAllGenresFromDB();
  const selectedGenre = genres.find(genre => genre.genre_id == genreID);

  if (!selectedGenre) {
    throw new Error('Genre');
  }

  const title = selectedGenre.genre;
  const genreEntries = await db.getSingleGenreFromDB(genreID);
  
  if (genreEntries.length == 0) {
    type = 'empty genre';
  } else {
    type = 'genre';
  }
  
  res.render('index', { title, links, type, genreEntries });
}

async function getSingleDeveloper(req, res) {
  const developerID = req.params.developer_id;
  const developers = await db.getAllDevelopersFromDB();
  const selectedDeveloper = developers.find(developer => developer.developer_id == developerID);

  if (!selectedDeveloper) {
    throw new Error('Developer');
  }
  
  const title = selectedDeveloper.developer;
  const developerEntries = await db.getSingleDeveloperFromDB(developerID);
  
  if (developerEntries.length == 0) {
    type = 'empty developer';
  } else {
    type = 'developer';
  }
  
  res.render('index', { title, links, type, developerEntries });
}

module.exports = { getAllGames, getAllGenres, getAllDevelopers, getSingleGenre, getSingleDeveloper };