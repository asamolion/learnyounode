var fs = require('fs'),
    path = require('path');

/* returns the array of files matching the extension in the directory */
module.exports = function (dir, ext, callback) {
    if (ext[0] != '.') {
        ext = '.' + ext;
    }
    fs.readdir(dir, function (err, files) {
        if (err) {
            return callback(err);
        } 
        var data = [];
        for (var i = 0; i < files.length; i++) {
            if (path.extname(files[i]) === ext) {
                data.push(files[i]);
            }
        }
        callback(null, data);
    });
};

