const socketio = require('socket.io');
const io = socketio();

const fakeDatebase = [
  {
    id: 1,
    username: 'admin',
    message: 'Hello World.'
  },
  {
    id: 2,
    username: 'admin',
    message: 'Hi!'
  },
  {
    id: 3,
    username: 'user',
    message: 'Hi admin!'
  },
];

// Socket listen server
const socketStart = server => io.listen(server);

// Socket connect
io.on('connection', socket => {

  // User login
  if (socket.handshake.session.username) {

    // socket.handshake.session
    socket.emit('messages', {
      fakeDatebase,
      login_user: socket.handshake.session.username
    });

    socket.on('add message', (message) => {

      let id = 3;
      let pushDatebase = {
        id: id+=1,
        username: socket.handshake.session.username,
        message
      };
      fakeDatebase.push(pushDatebase);

    });
    
  } 
  
  // User logout   or not logged in
  else {
    // Socket disconnect
    socket.on('disconnect', () => {
      console.log('Not logged in.');
    });
  }

});

module.exports = socketStart;