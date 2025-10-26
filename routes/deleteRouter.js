const express = require('express');
const deleteRouter = express.Router();
const deleteController = require('../controllers/deleteController');

deleteRouter.delete('/:id', deleteController.deleteGame);
deleteRouter.delete('/genre/:genre_id', deleteController.deleteGenre);
deleteRouter.delete('/developer/:developer_id', deleteController.deleteDeveloper);

module.exports = deleteRouter;