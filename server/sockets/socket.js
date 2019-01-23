const { io } = require('../server')


io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })


    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    // Escuchar al cliente 
    client.on('enviarMensaje', (response, callback) => {
        console.log(response)

        // La propiedad de todos los clientes es broadcast 

        client.broadcast.emit('enviarMensaje', response)

        /* if (response.usuario) {
            callback({
                ok: true,
                message: 'Todo Salió bien'
            });
        } else {
            callback({ ok: false, message: 'Algo salió mal' });
        }*/ 


    })


})