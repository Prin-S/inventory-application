const express = require('express');
const newItemRouter = express.Router();
const newItemController = require('../controllers/newItemController');

newItemRouter.get('/', newItemController.addGame);
newItemRouter.get('/genre', newItemController.addGenre);
newItemRouter.get('/developer', newItemController.addDeveloper);

module.exports = newItemRouter;