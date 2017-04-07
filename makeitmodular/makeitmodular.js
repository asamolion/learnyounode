var module = require('./module.js'),
    dir = process.argv[2],
    ext = '.' + process.argv[3];


module(dir, ext, function(err, data) {
    if (err) {
        console.log('error');
    }
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});

