let socket = io()

$('.loginbox').show()
$('.chatbox').hide()

$('.start').click(() => {
    socket.emit('login', {
        User: $('.inpUsername').val(),
        Password: $('.inpPassword').val()
    })
})
socket.on('logged in' ,(data) => {
    $('.loginbox').hide()
    $('.chatbox').show()
})

$('.btnRequest').click(() => {
    socket.emit('msg_send', {
        to: $('.inpToUser').val(),
        msg: $('.inpNewMsg').val()
    })
})

socket.on('recieved', (data) => {
    $('.ulmsglist').append($('<li>').text(data.msg))
})