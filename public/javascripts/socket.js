const socket = io();

const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('messages');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.m.value
    socket.emit('chat message', message);
    e.target.m.value = '';
    chatBox.appendChild(makeMessage(message, false));
})

socket.on('chat message', (message) => {
    chatBox.appendChild(makeMessage(message, true));
})

const makeMessage = (message, isOthers) => {
    const msgBox = document.createElement('div');
    const classname = isOthers ? "others-message-wrapper" : "my-message-wrapper";
    msgBox.className = classname;
    msgBox.innerText = message;
    return msgBox;
}