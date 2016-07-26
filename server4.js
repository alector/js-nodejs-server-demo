var http = require("http")
var fs = require('fs')


// THIS IS A WEB API RETURNING JSON
http.createServer( function (req_stream, resp_stream){

    // console.log(request)
    console.log("There is a request!")

    var data = {
        name: "Peter", 
        age: 30
    }


    // serialising = convert object to json
    resp_stream.end(JSON.stringify(data))


}).listen(1337, '127.0.0.1')

// I hardcode the response
// the request will be sent by the browser!

// if I write localhost in my pc it is translated as 127.0.0.1

// $ node server.js <--- to run the server