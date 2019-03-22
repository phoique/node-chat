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

  // User login
  if (socket.handshake.session.username) {

    console.log("Giriş yapıldı.");

      // socket.handshake.session
    socket.emit('messages', {
      fakeMessages,
      login_user: socket.handshake.session.username
    });

    socket.on('add message', (message) => {
      let push_datebase = {
        id: 5,
        username: socket.handshake.session.username,
        message
      };
      fakeMessages.push(push_datebase);
    });
    
  } 
  
  // User logout   or not logged in
  else {
    // Socket disconnect
    socket.on('disconnect', () => {
      console.log('Giriş yapılmamış.');
    });
  }

});

module.exports = socketStart;