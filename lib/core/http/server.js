const { host, port, rpc_host, rpc_port, home_page, about_page, donate_page } = require('../../../config.json');
var http = require('http');
var fs = require('fs');
var clc = require("cli-color");

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// We are using our packages here
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())


// This is the main page the 'Home Page' of the Avalyn Server.
app.get('/', (req, res)=>{
res.sendFile('web/home.html' , { root : __dirname});
})

// This is the main page the 'About Page' of the Avalyn Server.
app.get('/about', (req, res)=>{
res.sendFile('web/about.html' , { root : __dirname});
})

// This is the main page the 'Donation Page' of the Avalyn Server.
app.get('/donate', (req, res)=>{
res.sendFile('web/donate.html' , { root : __dirname});
})

// This is the main page the 'Invitation Page' of the Avalyn Server.
app.get('/invite', (req, res)=>{
res.sendFile('web/invite.html' , { root : __dirname});
})

// This is the main page the 'Bitcoin (BTC) Page' of the Avalyn Server.
app.get('/donate/btc', (req, res)=>{
res.sendFile('web/donations/crypto/btc.html' , { root : __dirname});
})

// This is the main page the 'Ethereum (ETH) Page' of the Avalyn Server.
app.get('/donate/eth', (req, res)=>{
res.sendFile('web/donations/crypto/eth.html' , { root : __dirname});
})

// This is the main page the 'Polkadot (DOT) Page' of the Avalyn Server.
app.get('/donate/dot', (req, res)=>{
res.sendFile('web/donations/crypto/dot.html' , { root : __dirname});
})

// This is the main page the 'Paypal Page' of the Avalyn Server.
app.get('/donate/paypal', (req, res)=>{
res.sendFile('web/donations/paypal.html' , { root : __dirname});
})

// This is the main page the 'Venmo Page' of the Avalyn Server.
app.get('/donate/venmo', (req, res)=>{
res.sendFile('web/donations/venmo.html' , { root : __dirname});
})

// This is the main page the 'Avalyn Documentation' of the Avalyn Server.
app.get('/docs/avalyn', (req, res)=>{
res.sendFile('web/docs/avalyn.html' , { root : __dirname});
})

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
console.log(clc.white(` [`) + clc.green(`Web UI`) + clc.white(`]: 404 Error: `) + clc.yellow(`Detected & Redirection.`));
res.sendFile('web/errors/404.html' , { root : __dirname});
})

//Start your server on a specified port
app.listen(port, host, ()=>{
console.log(clc.cyan("\n +") + clc.green(" Loading ") + clc.cyan("JSON-Encoded") + clc.green(" Support."));
console.log(clc.cyan(" +") + clc.green(" Loading ") + clc.cyan("URL-Encoded") + clc.green(" Support.\n"));
    console.log(clc.white(` Avalyn Web UI & RPC Client\n`) + clc.green(` Web UI Host: `) + clc.cyan(`${host}\n`) + clc.green(` Web UI Port: `) + clc.cyan(`${port}`) + clc.white(`\n\n Live URL: `) + clc.green(`https://`) + clc.cyan(`${host}`) + clc.green(`\n\n RPC Client Host: `) + clc.cyan(rpc_host) + clc.green(`\n RPC Client Port: `) + clc.cyan(rpc_port + `\n\n`) + clc.white(` [`) + clc.green(`SSL/HTTPS`) + clc.white(`]: `) + clc.green(`SSL/HTTPS has been activated.\n`) + clc.white(` [`) + clc.green(`Secure Interactions`) + clc.white(`]: `) + clc.green(`Processed via client-side security.\n ---------------------------------------------------------------\n`) + clc.white(` Press`) + clc.cyan(` CTRL+C `) + clc.white(`or type`) + clc.cyan(` Exit `) + clc.white(`to close Avalyn.\n`));

})
