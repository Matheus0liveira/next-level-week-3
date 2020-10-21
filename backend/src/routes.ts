import { Router } from 'express';

import multer from 'multer';

import OrphanagesController from './controllers/OrphanageController';
import UserController from './controllers/UserController';

import uploadConfig from './config/upload';
import AuthController from './controllers/AuthController';
import DashBoardController from './controllers/DashboardController';

import auth from './middlewares/auth';

const upload = multer(uploadConfig);

const routes = Router();





// No Auth
routes.get('/orphanages', OrphanagesController.index);

routes.get('/orphanages/:id', OrphanagesController.show);

routes.post('/orphanages', upload.array('images'), OrphanagesController.create);




// Session
routes.post('/auth', AuthController.authentication);


// User
routes.post('/users', UserController.create);

routes.post('/users/forgot_password', UserController.forgotPassword);

routes.put('/users/reset_password/:token', UserController.resetPassword);



// DashBoard
routes.delete('/dashboard/delete/:id', auth, DashBoardController.delete);

routes.put('/dashboard/update/:id', auth, upload.array('images'), DashBoardController.update);

routes.get('/dashboard/orphanages', auth, DashBoardController.index);
export default routes;
