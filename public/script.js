let socket = io()

let btnrequest = document.getElementsByClassName('btn')
let inpMsg = document.getElementsByClassName('inpMsg')
let ulmsglist = document.getElementsByClassName('ulmsglist')

btnrequest.onclick = function () {
    socket.emit('dm-my-msg' , {
        msg: inpMsg.value
    })
    inpMsg.value 
}