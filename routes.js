const express = require('express');
const route = express.Router();
const HomeControler = require('./src/controllers/HomeController');


route.get( '/', HomeControler.paginaInicial);

route.post('/', HomeControler.Postado)
module.exports = route;

