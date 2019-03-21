const socketio = require('socket.io');
const io = socketio();

const fakeMessages = [
  {
    id: 1,
    username: "admin",
    message: "Hello World."
  },
  {
    id: 2,
    username: "admin",
    message: "Hi!"
  },
  {
    id: 3,
    username: "user",
    message: "Hi admin!"
  },
  {
    id: 4,
    username: "name",
    message: "Hi Man!"
  }
];

// Socket listen server
socketStart = server => io.listen(server);

// Socket connect
io.on('connection', socket => {
  // socket.handshake.session
  socket.emit('messages', {
    fakeMessages,
    login_user: socket.handshake.session.username
  });

  // Socket disconnect
  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı.');
  });

});

module.exports = socketStart;