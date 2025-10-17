const db = require('../db/getQueries');
const links = require('../links');

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

module.exports = { getAllGames, getAllGenres, getAllDevelopers, getSingleGenre, getSingleDeveloper };