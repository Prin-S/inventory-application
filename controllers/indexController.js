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

module.exports = { getAllGames, getAllGenres, getAllDevelopers };