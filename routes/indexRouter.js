const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/indexController');

indexRouter.get('/', indexController.getAllGames);
indexRouter.get('/genres', indexController.getAllGenres);
indexRouter.get('/developers', indexController.getAllDevelopers);

indexRouter.get('/genre/:genre_id', indexController.getSingleGenre);
indexRouter.get('/developer/:developer_id', indexController.getSingleDeveloper);

indexRouter.post('/add', indexController.postNewGame);
indexRouter.post('/add/genre', indexController.postNewGenre);
indexRouter.post('/add/developer', indexController.postNewDeveloper);

module.exports = indexRouter;