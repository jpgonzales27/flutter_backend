const express = require('express');
const path = require('path');
require('dotenv').config()

//APP EXPRESS
const app = express();



//SERVIDOR SOKECT IO
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



  //path publico
const publicPath = path.resolve( __dirname, 'public');
app.use(express.static(publicPath)); 


//SERVIDOR EXPRESS CREADO EN EL PUERTO 3000
server.listen(process.env.PORT,(error)=>{
    if(error) throw Error(error);
    console.log('Escuchando en el puerto',process.env.PORT);
})