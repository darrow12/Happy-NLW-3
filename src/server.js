// NPM = Node Packge Manager
// Algo mais ou menos como Gerenciador de pacotes Node


// Importar dependência
const express = require('express');
const path = require('path');

 // Iniciando o express
const server = express()

// Criar uma rota
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// Ligar o servidor
server.listen(5500)