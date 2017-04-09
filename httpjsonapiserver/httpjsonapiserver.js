var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    var urlObject = url.parse(req.url, true), 
        pathname = urlObject.pathname;

    if (pathname === '/api/parsetime') {
        let date = new Date(Date.parse(urlObject.query.iso));        
        res.end('{ "hour": ' + date.getHours() +', "minute": ' + date.getMinutes() + ', "second": ' + date.getSeconds() + '}');
    }
    if (pathname === '/api/unixtime') {
        let date = new Date(Date.parse(urlObject.query.iso));        
        res.end('{ "unixtime": ' + date.getTime().toString() + '}');
    }
});

server.listen(port);