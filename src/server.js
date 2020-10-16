// NPM = Node Packge Manager
// Algo mais ou menos como Gerenciador de pacotes Node

const express = require('express');
const server = express()

server.get('/', () => {
    console.log('Oi')
})