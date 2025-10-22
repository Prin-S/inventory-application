const express = require('express');
const updateRouter = express.Router();
const updateController = require('../controllers/updateController');

updateRouter.get('/:id', updateController.updateGame);
updateRouter.get('/genre/:genre_id', updateController.updateGenre);
updateRouter.get('/developer/:developer_id', updateController.updateDeveloper);

module.exports = updateRouter;