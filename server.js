const http  = require('http');

const app = require('./app');
const connectDB =  require('./db');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const startServer = async() =>{
    try{
   await connectDB(process.env.MONGO_URI);
   
   server.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
   })
    }
    catch(err){
        console.log(err);
    }
};

startServer();