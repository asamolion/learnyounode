var fs = require('fs'),
    file = process.argv[2];

var contents = fs.readFileSync(file);

var newlines = contents.toString().split('\n').length - 1;

console.log(newlines);