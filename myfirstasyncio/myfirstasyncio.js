var fs = require('fs'),
    file = process.argv[2],
    newlines;

fs.readFile(file, 'utf8', function(err, data) {
    newlines = data.split('\n').length - 1;
    console.log(newlines);
});

