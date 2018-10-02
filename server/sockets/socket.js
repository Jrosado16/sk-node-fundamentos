const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('sendMsj', {
        nombre: 'Josue',
        mensaje: 'Hi world'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMsj', (msj, callback) => {
        console.log(msj);

        client.broadcast.emit('sendMsj', msj)

        // if (msj.nombre) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo salio mal!!!!'
        //     })
        // }
    })
})