// for handling the socket io
const io = require('socket.io')(5500, {
    cors: {
      origin: '*',
    }
  });

const user = {} ;

io.on("connection", socket=>{
    socket.on("new_user_joined", name =>{
        console.log("New User",name)
        user[socket.id] = name;
        socket.broadcast.emit("user_joined",name );
    });

    socket.on("send", msg=>{
        socket.broadcast.emit("recieve",{msg:msg, name: user[socket.id]})
    });
})