var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filePath = process.argv[3];

var server = http.createServer(function (req, res) {
    var readStream = fs.createReadStream(filePath);    
    readStream.pipe(res);
});

server.listen(port);
