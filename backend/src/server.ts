import express from 'express';

import cors from 'cors';
import { join } from 'path';

import 'express-async-errors';

import './database/connection';

import errorHandler from './errors/handler';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.listen(3333, () => console.log('🔥 Server started at: http://localhost:3333'));
