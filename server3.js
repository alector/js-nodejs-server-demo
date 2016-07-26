var http = require("http")
var fs = require('fs')

http.createServer( function (req_stream, resp_stream){

    // console.log(request)
    console.log("There is a request!")

    resp_stream.writeHead(200, {'Content-Type': 'text/html'})

    //Asynchronous load of html
    fs.createReadStream(__dirname + "/index.html").pipe(resp_stream)



}).listen(1337, '127.0.0.1')

// I hardcode the response
// the request will be sent by the browser!

// if I write localhost in my pc it is translated as 127.0.0.1

// $ node server.js <--- to run the server