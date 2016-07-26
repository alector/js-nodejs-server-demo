# js-nodejs-server-demo
An example of node.js server demo

## 1. How to run the server?

### (a) 1st way: use node 
If you want to run a server file (e.g. server1.js ) type: 

    $ node server1.js

and then go to http://localhost:1337 to see the result. 

### (b) 2nd way: use nodemon (node monitor)

> **How to install nodemon globally?**Type `$ npm install -g nodemon` in your terminal

Run the .js file, example:

    $ nodemon server1.js

and then go to http://localhost:1337 to see the result. 

> **What's the benefit of nodemon?** 
If you make any change inside your files you don't need to restart node server, it does it for you. 

## What type of servers do we see here?

| filename | description |
| --- | --- |
| server1.js | Simple node.js server | 
| server2.js |Load external html synchronously |
| server3.js | Load external html asynchronously (streams and pipe) |
| server4.js |Server API (serialise object data into json) |
| server5.js |Simple Rooting | 



