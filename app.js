var http = require("http")

http.createServer( function (request, response){

    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("Hello world!\n by Panos\n")

}).listen(1337, '127.0.0.1')

// if I write localhost in my pc it is translated as 127.0.0.1