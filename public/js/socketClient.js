const socket = io();

socket.on('messages', (data) => {

  fake = data.fakeMessages;
  fake.map(messages => {

    // The user who wrote the message
    if (messages.username === data.login_user) {
      
      // message html p tag
      let message_p = document.createElement('p');
      message_p.className = 'tag is-medium is-info';
      message_p.appendChild(document.createTextNode(messages.message));

      // message posision div
      let pos_div = document.createElement('div');
      pos_div.className = 'message-right';
      pos_div.appendChild(message_p);

      // Message box append
      element_id = document.getElementById("message-box");
      element_id.appendChild(pos_div);

    } else {
      
      // message html p tag
      let message_p = document.createElement('p');
      message_p.className = 'tag is-medium is-warning';
      message_p.appendChild(document.createTextNode(`${messages.username}: ${messages.message}`));

      // message posision div
      let pos_div = document.createElement('div');
      pos_div.className = 'message-left';
      pos_div.appendChild(message_p);

      // Message box append
      element_id = document.getElementById("message-box");
      element_id.appendChild(pos_div);

    }

  });
  
});

// Send message 
let sendMessage = () => {
  let add_message = document.getElementById('add_message');
  socket.emit('add message', add_message.value);
  console.log(add_message.value);
}