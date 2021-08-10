const http = require('http')
const express = require('express')
const socket = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = socket(server)

app.use('/' , express.static(__dirname + '/public'))

server.listen(4000,() => {
  console.log('Started on http://localhost:4000');
})
