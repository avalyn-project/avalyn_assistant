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

// This is the main page the 'Developmental Page' of the Avalyn Server.
app.get('/dev/', (req, res)=>{
res.sendFile('web/developmental/hub.html' , { root : __dirname});
})

// This is the main page the 'Crypto Page' of the Avalyn Server.
app.get('/dev/crypto', (req, res)=>{
res.sendFile('web/developmental/crypto.html' , { root : __dirname});
})

// This is the main page the 'Blockchain Page' of the Avalyn Server.
app.get('/dev/blockchain', (req, res)=>{
res.sendFile('web/developmental/blocks.html' , { root : __dirname});
})

// This is the main page the 'Wallet Page' of the Avalyn Server.
app.get('/dev/wallet', (req, res)=>{
res.sendFile('web/developmental/wallet.html' , { root : __dirname});
})

// This is the main page the 'Bitcoin (BTC) Page' of the Avalyn Server.
app.get('/donate/btc', (req, res)=>{
res.sendFile('web/donation_methods/crypto/btc.html' , { root : __dirname});
})

// This is the main page the 'Ethereum (ETH) Page' of the Avalyn Server.
app.get('/donate/eth', (req, res)=>{
res.sendFile('web/donation_methods/crypto/eth.html' , { root : __dirname});
})

// This is the main page the 'Polkadot (DOT) Page' of the Avalyn Server.
app.get('/donate/dot', (req, res)=>{
res.sendFile('web/donation_methods/crypto/dot.html' , { root : __dirname});
})

// This is the main page the 'Paypal Page' of the Avalyn Server.
app.get('/donate/paypal', (req, res)=>{
res.sendFile('web/donation_methods/paypal.html' , { root : __dirname});
})

// This is the main page the 'Venmo Page' of the Avalyn Server.
app.get('/donate/venmo', (req, res)=>{
res.sendFile('web/donation_methods/venmo.html' , { root : __dirname});
})



//Start your server on a specified port
app.listen(port, host, ()=>{
console.log(clc.cyan("\n +") + clc.green(" Loading ") + clc.cyan("JSON-Encoded") + clc.green(" Support."));
console.log(clc.cyan(" +") + clc.green(" Loading ") + clc.cyan("URL-Encoded") + clc.green(" Support.\n"));
    console.log(clc.white(` Avalyn [UI] v0.1.2\n`) + clc.green(` Status... `) + clc.cyan(`Initialized and active!\n\n`) + clc.white(` Avalyn currently has the configuration of\n`) + clc.green(` Configured Host: `) + clc.cyan(`${host}\n`) + clc.green(` Configured Port: `) + clc.cyan(`${port}`) + clc.white(`\n\n You can view the UI now!\n Live URL: [ `) + clc.green(`https://`) + clc.cyan(`${host}`) + clc.white(` ]\n\n`) + clc.white(` Avalyn [RPC] Client\n`) + clc.green(` RPC Server Host: `) + clc.cyan(rpc_host) + clc.green(`\n RPC Server Port: `) + clc.cyan(rpc_port + `\n\n`) + clc.white(` [`) + clc.green(`SSL/HTTPS`) + clc.white(`]: `) + clc.green(`SSL/HTTPS has been activated.\n`) + clc.white(` [`) + clc.green(`Secure Interactions`) + clc.white(`]: `) + clc.green(`Processed via client-side security.\n ---------------------------------------------------------------\n`) + clc.white(` Press`) + clc.cyan(` CTRL+C `) + clc.white(`or type`) + clc.cyan(` Exit `) + clc.white(`to close Avalyn.\n`));

})
