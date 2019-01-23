const express = require('express');

const path = require('path');

const app = express();

const socketIO = require('socket.io'); 

const http = require('http');

let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

// Comunicación con el backend 
module.exports.io = socketIO(server)

require('./sockets/socket')

// De preferencia usar funciones de flecha cuando se trabaje javascript del lado del servidor o con Node





server.listen(PORT, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ PORT }`);

});