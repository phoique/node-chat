const socketio = require('socket.io');
const io = socketio();

// Socket listen server
socketStart = server => io.listen(server);

// Socket connect
io.on('connection', socket => {
  // socket.handshake.session
  socket.on('hello', () => console.log('server Hello'));
  socket.emit('hi');

  // Socket disconnect
  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı.');
  });

});

module.exports = socketStart;