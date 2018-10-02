var socket = io()

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//envia un msj
socket.emit('enviarMsj', {
    nombre: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Hola', resp);
})

socket.on('sendMsj', function(msj) {
    console.log(msj);
})