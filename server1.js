var http = require("http")

http.createServer( function (request, response){

    // console.log(request)
    console.log("There is a request!")

    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("Hello world!\n by Alector\n")



}).listen(1337, '127.0.0.1')

// I hardcode the response
// the request will be sent by the browser!

// if I write localhost in my pc it is translated as 127.0.0.1

// $ node server.js <--- to run the server