const express = require('express');
const socket = require('socket.io');

const app = express();

server = app.listen(8888, function(){
    console.log('server is running!', 'http://localhost:8888');
});

const io = socket(server);

io.on('connection',(socket) => {
    console.log('Acces to User:', socket.client.id);
    socket.on('changeState',(table, status) => {
        //メッセージ受信時の処理
        console.log('message', table, status);
        io.emit('changeState', {table: table, status: status,});
    });
});
