require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT;
const hostname  = process.env.HOSTNAME;


const server = http.createServer(app);

server.listen(port,hostname,()=>console.log(`Server running at http://${hostname}:${port}/`));
