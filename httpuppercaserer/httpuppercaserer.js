var http = require('http'),
    map = require('through2-map'),  
    port = process.argv[2];


var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n');
    }
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);