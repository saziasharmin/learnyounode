var dir = process.argv[2],
    ext = '.' + process.argv[3],
    fs = require('fs'),
    path = require('path');
fs.readdir(dir, function(err, list) {
    if (err) {
        console.error(err);
    } else {
        list.forEach(function(val) {
            if (path.extname(val) === ext) {
                console.log(val);
            }
        });
    }
});