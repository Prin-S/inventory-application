const express = require('express');
const indexRouter = express.Router();
const indexControllerGet = require('../controllers/indexControllerGet');

indexRouter.get('/', indexControllerGet.getAllGames);
indexRouter.get('/genres', indexControllerGet.getAllGenres);
indexRouter.get('/developers', indexControllerGet.getAllDevelopers);

indexRouter.get('/genre/:genre_id', indexControllerGet.getEntriesInSingleGenre);
indexRouter.get('/developer/:developer_id', indexControllerGet.getEntriesInSingleDeveloper);

module.exports = indexRouter;