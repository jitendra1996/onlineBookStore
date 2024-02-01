import 'dotenv/config';
import http from 'http';
import app from './app';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;
const hostname  = process.env.HOSTNAME;


const server = http.createServer(app);

server.listen(port,hostname,()=>console.log(`Server running at http://${hostname}:${port}/`));
