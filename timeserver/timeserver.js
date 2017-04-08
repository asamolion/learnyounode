var net = require('net'),
    port = process.argv[2];

var server = net.createServer(function (socket) {
    date = new Date();
    // okay, so the date formatting is off. I need to fix this 
    data = date.getFullYear() + '-' + zeroPad(date.getMonth()+1) + '-' + zeroPad(date.getDate()) + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
    socket.end(data);
});

function zeroPad(number) {
    if (number < 10) 
        return '0' + number;
    else 
        return number;
}

server.listen(port);