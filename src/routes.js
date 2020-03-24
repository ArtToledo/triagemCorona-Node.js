const express = require('express');

const AuthController = require('./controllers/authController');
const MessageController = require('./controllers/messageController');

const routes = express.Router();

//Usuário
routes.post('/auth/register', AuthController.createRegister);
routes.post('/auth/login', AuthController.login);

//Mensagens
routes.get('/messages', MessageController.index);
routes.post('/messages', MessageController.storeMessage);

module.exports = routes;