// NPM = Node Package Manager
// Algo mais ou menos como Gerenciador de pacotes Node


// Importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js'); 

console.log(pages)
 // Iniciando o express
const server = express();

server
// Utilizar body do req
    .use(express.urlencoded({ extended: true }))
// Utilizando os arquivos estáticos
.use(express.static('public')) // Express cria todas as rotas que precisa no public

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Ligar o servidor
server.listen(5500)