const { Router } = require('express');
const routes = Router();
const cowsayRoutes = require('./cowsay');

routes.use('/cowsay', cowsayRoutes);

module.exports = routes;