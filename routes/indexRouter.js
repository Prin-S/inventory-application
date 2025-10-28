const express = require('express');
const indexRouter = express.Router();
const indexControllerGet = require('../controllers/indexControllerGet');
const indexControllerPost = require('../controllers/indexControllerPost');
const indexControllerUpdate = require('../controllers/indexControllerUpdate');

indexRouter.get('/', indexControllerGet.getAllGames);
indexRouter.get('/genres', indexControllerGet.getAllGenres);
indexRouter.get('/developers', indexControllerGet.getAllDevelopers);

indexRouter.get('/genre/:genre_id', indexControllerGet.getEntriesInSingleGenre);
indexRouter.get('/developer/:developer_id', indexControllerGet.getEntriesInSingleDeveloper);

indexRouter.post('/add', indexControllerPost.postNewGame);
indexRouter.post('/add/genre', indexControllerPost.postNewGenre);
indexRouter.post('/add/developer', indexControllerPost.postNewDeveloper);

indexRouter.put('/update/:id', indexControllerUpdate.updateGame);
indexRouter.put('/update/genre/:genre_id', indexControllerUpdate.updateGenre);
indexRouter.put('/update/developer/:developer_id', indexControllerUpdate.updateDeveloper);

module.exports = indexRouter;