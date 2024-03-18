// // const http = require('http');
// const expressPk = require("express");

// const app = expressPk();

// app.get("/", (req, res) => {
//   res.send("Welcome Home");
// });

// app.get("/getUsers", (req, res) => {
//   res.send("Shibuzor \n ChiAmaka   \n Zahrah    \n Auwal");
// });

// const hostname = "127.0.0.1";
// const port = 3000;

// // The create server requires 2 parameters which are the  request and the response:

// // const server = http.createServer((req, res)=>{
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello, World! \n')
// // })
// /**
//  * Cereal God
//  *
//  * create endpoints to getUsers
//  * about
//  * an endpoint that will return all of the names of 3mtt users
//  */

// app.listen(port, () => {
//   console.log("Server is running on portf");
// });

// // server.listen(port, hostname, ()=>{
// //     console.log('Server runnimg at http:/127.0.0.1:3000')
// // })


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.get("/getUsers", (req, res) => {
  const users = ["Shibuzor", "ChiAmaka", "Zahrah", "Musa"];
  res.send(users);
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});