const { Router } = require("express");

const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', UserController.sigIn);
// Neste caso, o Middleware de Autenticação só vai funcionar para as rotas que estão abaixo dele.
routes.use(authMiddleware);
routes.get('/users', UserController.show);
routes.delete('/users', UserController.delete);

module.exports = routes;