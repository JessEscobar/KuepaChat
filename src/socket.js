module.exports = (http) => {
    const io = require('socket.io')(http);

    io.on('connection', (socket) => {
        console.log('Usuario conectado {{nick}}');

        socket.on('chat-message', (msg) => {
            io.emit('chat-message', msg);
        });
        socket.on('disconnect', () => {
            console.log('Usuario desconectado');
        });
    });
}