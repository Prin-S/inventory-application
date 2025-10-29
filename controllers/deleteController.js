require('dotenv').config();
const db = require('../db/getQueries');
const dbDelete = require('../db/deleteQueries');
const links = require('../links');
const validators = require('../validators');
const { validationResult } = require('express-validator');

async function confirmDeleteGame(req, res) {
  const title = 'game';
  const [ selectedGame ] = await db.getSingleGameFromDB(req.params.id);

  res.render('deleteConfirmation', { links, title, selectedGame });
}

async function confirmDeleteGenre(req, res) {
  const title = 'genre';
  const [ selectedGenre ] = await db.getSingleGenreFromDB(req.params.genre_id);

  res.render('deleteConfirmation', { links, title, selectedGenre });
}

async function confirmDeleteDeveloper(req, res) {
  const title = 'developer';
  const [ selectedDeveloper ] = await db.getSingleDeveloperFromDB(req.params.developer_id);

  res.render('deleteConfirmation', { links, title, selectedDeveloper });
}

const deleteGame = [ validators.validatePassword, async (req, res) => {
  const title = 'game';
  const [ selectedGame ] = await db.getSingleGameFromDB(req.params.id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('deleteConfirmation', { links, title, selectedGame, errors: errors.array() });
  }

  await dbDelete.deleteGameFromDB(req.params.id);

  res.redirect('/');
}];

const deleteGenre = [ validators.validatePassword, async (req, res) => {
  const title = 'genre';
  const [ selectedGenre ] = await db.getSingleGenreFromDB(req.params.genre_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('deleteConfirmation', { links, title, selectedGenre, errors: errors.array() });
  }

  await dbDelete.deleteGenreFromDB(req.params.genre_id);

  res.redirect('/genres');
}];

const deleteDeveloper = [ validators.validatePassword, async (req, res) => {
  const title = 'developer';
  const [ selectedDeveloper ] = await db.getSingleDeveloperFromDB(req.params.developer_id);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).render('deleteConfirmation', { links, title, selectedDeveloper, errors: errors.array() });
  }

  await dbDelete.deleteDeveloperFromDB(req.params.developer_id);

  res.redirect('/developers');
}];

module.exports = { confirmDeleteGame, confirmDeleteGenre, confirmDeleteDeveloper, deleteGame, deleteGenre, deleteDeveloper };