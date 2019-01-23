var socket = io()

socket.on('connect', function () {

    console.log('conectado')

})

socket.on('disconnect', function () {
    console.log('Perdimos conexión')
})

// Emit para enviar información 

socket.emit('enviarMensaje', {
    usuario: 'Luis Fernando Barrera',
    mensaje: 'Hola Mundo'
}, function (response) {
    console.log('respuesta server: ', response)
})

// Listner del lado del cliente
socket.on('enviarMensaje', function (response) {
    console.log('Servidor : ', response)
})