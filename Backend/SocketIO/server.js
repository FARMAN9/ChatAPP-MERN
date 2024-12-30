import http from "http";
import express from "express";
import { Server } from "socket.io";
const app = express();



const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: ["https://chatapp-mern-vvn5.onrender.com"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    },
});

// real time communication

export const GetReciverSocketId=async(reciver)=>{return users[reciver]}; 

const users={};
// socket.io used 
io.on("connection",(socket)=>{console.log("A user connected to ",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId){
       users[userId]=socket.id
       console.log("our users",users);


    }
    io.emit("GetOnlineUser",Object.keys(users));

socket.on("disconnect",()=>{console.log(" A user disconnected from ",socket.id);
    delete users[userId];
    io.emit("GetOnlineUser",Object.keys(users));
});
});





export {io,server,app};