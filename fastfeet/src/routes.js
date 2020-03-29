import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

import authMiddleware from './app/middlewares/auth';
import sessionMiddleware from './app/middlewares/session';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ ok: true });
});

routes.post('/sessions', sessionMiddleware, SessionController.store);

routes.use(authMiddleware);

routes.post('/recipients', RecipientsController.store);

export default routes;
