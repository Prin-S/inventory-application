const express = require('express');
const updateRouter = express.Router();
const updateController = require('../controllers/updateController');

updateRouter.get('/:id', updateController.updateGame);
updateRouter.get('/genre/:genre_id', updateController.updateGenre);
updateRouter.get('/developer/:developer_id', updateController.updateDeveloper);

updateRouter.put('/:id', updateController.putExistingGame);
updateRouter.put('/genre/:genre_id', updateController.putExistingGenre);
updateRouter.put('/developer/:developer_id', updateController.putExistingDeveloper);

module.exports = updateRouter;