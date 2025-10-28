const express = require('express');
const deleteRouter = express.Router();
const deleteController = require('../controllers/deleteController');

deleteRouter.get('/confirm/:id', deleteController.confirmDeleteGame);
deleteRouter.get('/confirm/genre/:genre_id', deleteController.confirmDeleteGenre);
deleteRouter.get('/confirm/developer/:developer_id', deleteController.confirmDeleteDeveloper);

deleteRouter.delete('/:id', deleteController.deleteGame);
deleteRouter.delete('/genre/:genre_id', deleteController.deleteGenre);
deleteRouter.delete('/developer/:developer_id', deleteController.deleteDeveloper);

module.exports = deleteRouter;