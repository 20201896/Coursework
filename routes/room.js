let io = require("socket.io-client");
const socket = io.connect("http://localhost:3000");

socket.on("roomjoin",()=>{
    console.log("The first user has joined");
});
setTimeout(()=>{
    socket.emit("join");
},3000);