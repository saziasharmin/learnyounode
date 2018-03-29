var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    filename = process.argv[3];
var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(filename);

    stream.on('open', function() {
        stream.pipe(response);
    });
    stream.on('error', function(err) {
        console.error("There's been an error: " + err);
    });
});

server.listen(port);