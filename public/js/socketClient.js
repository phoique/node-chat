const socket = io();

socket.on('messages', (data) => {

  fake = data.fakeMessages;
  fake.map(messages => {

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

  });
  
});
