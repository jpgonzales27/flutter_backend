const { io } = require('../index');

//Mensaje del sockect
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.on('disconnect', () => { 
        console.log('Cliente Desconectado');   
    });

    //Escuchadno mensajes del frontend
    client.on('mensaje',( payload )=>{
        console.log('Mensaje',payload);
        //Cuando llega un mensaje del front Emitimos un mensaje a todos los clientes
        io.emit('mensaje',{admin: 'Nuevo mensaje' })
    })
  });