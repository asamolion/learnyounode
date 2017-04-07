var http = require('http'),
    bl = require('bl'),
    concat = require('concat-stream'),
    url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf8');
    res.pipe(concat(function(data) {
        console.log(data.length);
        console.log(data);
    }));
});