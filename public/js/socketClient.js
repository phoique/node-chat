const socket = io();

socket.emit('hello');

socket.on('hi', () => console.log('Client Hi.'));