const express = require('express');
const app = express();
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
const port = 3000;

app.use(express.static('public'));

io.on('connection', (server) =>{
    socket.on("join",()=>{
        socket.join("room1"); //name of room has to be specified - figure out a way to generate and spread? 
        console.log("A user joined the server");
    });
});

http.listen(port, function() {
  console.log('Server is listening on port 3000');
});