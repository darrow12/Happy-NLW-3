// NPM = Node Packge Manager
// Algo mais ou menos como Gerenciador de pacotes Node


// Importar dependência
const express = require('express');
const path = require('path');

 // Iniciando o express
const server = express()

server
// Utilizando os arquivos estáticos
.use(express.static('public')) // Express cria todas as rotas que precisa no public
// Criar uma rota
.get('/', (request, response) => {
    console.log(request.query)
    return response.sendFile(path.join(__dirname, 'views', 'index.html'))
})


// Ligar o servidor
server.listen(5500)