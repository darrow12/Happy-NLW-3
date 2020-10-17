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

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

// Criar uma rota
.get('/', (request, response) => {
    console.log(request.query)
    const name = "Darrow"
    return response.render('index', {name}) // Quando utiliza o mesmo nome, não é necessário fazer name: <nome_da_variavel> porque ele já entende que o valor está embutido ali
})


// Ligar o servidor
server.listen(5500)