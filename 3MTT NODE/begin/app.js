const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// The create server requires 2 parameters which are the  request and the response:

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Tpe', 'text/plain');
    res.end('Hello, World! /n')
})

server.listen(port, hostname, ()=>{
    console.log('Server runnimg at http:')
})
