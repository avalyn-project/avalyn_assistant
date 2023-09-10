const { rpc_host, rpc_port } = require('../../../config.json');
var express = require("express");
var app = express();
var clc = require("cli-color");
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
// example – hello world

// This is the main page the 'Home Page' of the Avalyn Server.
app.get('/', (req, res)=>{
res.sendFile('ui/client.html' , { root : __dirname});
})

// This is the main page the 'Home Page' of the Avalyn Server.
app.get('/genesis', (req, res)=>{
res.sendFile('ui/genesis.html' , { root : __dirname});
})

// This is the main page the 'Home Page' of the Avalyn Server.
app.get('/chat', (req, res)=>{
res.sendFile('ui/chat.html' , { root : __dirname});
})

// This is the main page the 'Home Page' of the Avalyn Server.
app.get('/donate', (req, res)=>{
res.sendFile('ui/donate.html' , { root : __dirname});
})

app.listen(rpc_port, rpc_host);
