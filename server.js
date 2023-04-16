const http  = require('http');

const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const startServer = () =>{
    server.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
   })
    }
startServer();