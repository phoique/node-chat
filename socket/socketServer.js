const socketio = require('socket.io');
const io = socketio();

function socketStart(server) {
  io.listen(server);
}

io.on('connection', function(socket){
  console.log('a user connected');
});

module.exports = socketStart;