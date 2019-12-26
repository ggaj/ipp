import { Router } from 'express';

import ChurchController from './app/controllers/ChurchController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.get('/churches', ChurchController.index);
routes.post('/churches', ChurchController.store);

export default routes;
