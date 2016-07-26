var http = require("http")
var fs = require('fs')


// HOW ROOTING WORKS
http.createServer( function (req_stream, resp_stream){

    // console.log(request)
    console.log("There is a request!")

    if (req_stream.url === '/'){

        resp_stream.writeHead(200, {'Content-Type': 'text/html'})
        //Asynchronous load of html
        fs.createReadStream(__dirname + "/index.html").pipe(resp_stream)
    }


    else if (req_stream.url === '/api'){

        var data = {
            name: "Peter", 
            age: 30
        }

        // serialising = convert object to json
        resp_stream.end(JSON.stringify(data))
    }

    // if url is not found 
    else {
        resp_stream.writeHead(404)

        resp_stream.end("Page not found")
    }






}).listen(1337, '127.0.0.1')

// I hardcode the response
// the request will be sent by the browser!

// if I write localhost in my pc it is translated as 127.0.0.1

// $ node server.js <--- to run the server