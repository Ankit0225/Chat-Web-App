const http = require('http')
const express = require('express')
const socket = require('socket.io')


const app = express()

const server = http.createServer(app)
const io = socket(server)

io.on('connection', (socket) => {
  console.log('connected with socket id =' , socket.id);

  // socket.on('msg_send', (data) =>{
  //   // console.log('recieved ',data.msg);
  //   // io.emit('recieved', data) // sends everybody
  //   // socket.emit('recieved', data) // sends to all and visible to you
  //   socket.broadcast.emit('recieved',data) // this visibles the message to all the users except you
  // })

})
app.use('/' , express.static(__dirname + '/public'))

server.listen(4000,() => {
  console.log('Started on http://localhost:4000');
})
