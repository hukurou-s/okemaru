const express = require('express');
const socket = require('socket.io');

const app = express();

server = app.listen(8888, function(){
    console.log('server is running!', 'http://localhost:8888');
});

const io = socket(server);

io.on('connection',(socket) => {
    console.log('Acces to User:', socket.client.id);
    socket.on('changeState', (message) => {
        console.log('message', message);
        const table = message.name;
        const status = message.status;
        io.emit('changeState', {name: table, status: status});
    });
});
