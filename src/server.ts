import http from 'http';
import app from './app';
import mongoose from 'mongoose';

import { port,hostname } from './config/server.config';
import { databaseURL } from './config/db.config';

const server = http.createServer(app);

const startServer = async () => {
    try {
        await mongoose.connect(databaseURL);
        server.listen(port,hostname,()=>console.log(`Server running at http://${hostname}:${port}/`));
    } catch (error) {
        console.error('Server not running due to database connection error');
    }
}

startServer();


process.on('uncaughtException',(error)=>{
    console.error('Uncaught Exception',error.message,error.stack);

    process.exit(1);
});
process.on('unhandledRejection',(reason)=>{
    console.log('UnHandle rejection : ',reason);

    process.exit(1);
});