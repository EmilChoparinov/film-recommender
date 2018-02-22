import { Express } from 'express';
import { resolve as resolvePath } from 'path';

export const routes = (app: Express) => {
    app.get('/', (req, res) => res.sendfile(resolvePath(__dirname, './../../client/webapp/dist/index.html')))
};