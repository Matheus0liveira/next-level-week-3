import { Router } from 'express';

import multer from 'multer';

import OrphanagesController from './controllers/OrphanageController';
import UserController from './controllers/UserController';

import uploadConfig from './config/upload';
import AuthController from './controllers/AuthController';

import auth from './middlewares/auth';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);
routes.post('/users', UserController.store);
routes.post('/auth', AuthController.authentication);

export default routes;
