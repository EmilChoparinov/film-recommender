import { connect as connectToMongoose } from 'mongoose';
import { readdirSync } from 'fs';
import { join as pathJoin } from 'path';
import { dbConnectionString } from './init.config';

connectToMongoose(dbConnectionString);

const readPath = pathJoin(__dirname, './../models/');

// dynamic loading for all mongoose files
readdirSync(readPath).forEach((model) => {
    if (model.indexOf('.ts') > 0) {
        require(`${readPath}${model}`);
    }
});