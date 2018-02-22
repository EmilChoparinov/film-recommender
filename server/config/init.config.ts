import * as express from 'express';
import * as session from 'express-session';

import { json } from 'body-parser';
import { join as pathJoin } from 'path';
import { logger } from './logger.config';

const server = express();

server.use(json());

server.use(session({
    secret: 'my secret key',
    resave: false,
    saveUninitialized: false
}));

server.use(express.static(pathJoin(__dirname, '../../client/webapp/dist/')));

server.use(logger);

export const PORT = 8000, app = server, dbConnectionString='mongodb://localhost/film-rec';