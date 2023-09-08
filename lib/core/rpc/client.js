const { rpc_host, rpc_port } = require('../../../config.json');
var express = require("express");
var app = express();
var clc = require("cli-color");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
// example – hello world

app.get("/", function(req, res) {
 res.send("<font style='font-family: Tahoma;font-size: 11px;color: #000000;'><center>Avalyn RPC Client Status... Online.</center>RPC Client Uptime:</font>");
});
// example – with parameters
// app.get("/things/:name/:id", function(req, res) {
//  res.send("id: " + req.params.id + " and name: " + req.params.name);
// });
// launch the server on this port
app.listen(rpc_port, rpc_host);
// call => http://localhost:3000/hello
// returns => Hello World!

