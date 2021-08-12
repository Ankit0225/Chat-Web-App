let socket = io()

let btnrequest = document.querySelector('.btn')
let inpMsg = document.querySelector('.inpMsg')
let ulmsglist = document.querySelector('.ulmsglist')

btnrequest.onclick = function () {
    socket.emit('msg_send' , {
        msg: inpMsg.value
    })
    inpMsg.value 
}

socket.on('recieved', (data) => {
    let listnewmsg = document.createElement('li')
    listnewmsg.innerText = data.msg
    ulmsglist.appendChild(listnewmsg)
})