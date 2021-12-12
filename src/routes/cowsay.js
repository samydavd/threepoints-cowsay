const { Router } = require('express');
const controller = require('../controllers/cowsay');
const routes = Router();

routes.post('/', controller.saySomething);

module.exports = routes;