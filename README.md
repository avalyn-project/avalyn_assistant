# 
<p align="center">
<a href="" target="_blank"><img src="https://xnitc.com/discord/bots/avalyn/data/imgs/avalyn_logo.png" width="414" height="129" border="0"></a>
</p>

#

<p align="center">
Security-Focused. | Customizable. | Discord Assistant Client. | Frontend Web UI. | Backend RPC Client.
</p>

#

> <a href="./includes/Commands.md" target="_blank">Full Command Documentation.</a> [Current Commands & Beta Commands]

> <a href="./includes/Features.md" target="_blank">Full Feature Documentation.</a> [Current Features & Beta Features]

> <a href="./includes/Roadmap.md" target="_blank">Avalyn Roadmap.</a> [The Avalyn Project developmental Roadmap.]

> <a href="./includes/Instructions" target="_blank">Avalyn Web UI/RPC Client Setup.</a> [Instruction on how to setup Avalyn.]

#

<table border="0" align="center">
<tr>
<td>
<img src="https://cdn.iconscout.com/icon/free/png-256/free-ubuntu-17-1175077.png" width="35" height="35"></img>
</td>
<td>
<center>Ubuntu</center>
</td>
<td>
<center>v22.04.2 LTS</center>
</td>
<td>
<center><a href="https://ubuntu.com" target="_blank">https://ubuntu.com</a></center>
</td>
</tr>
<tr>
<td>
<img src="https://s1.o7planning.com/ru/11931/images/20938929.png" width="35" height="35"></img>
</td>
<td>
<center>NodeJS</center>
</td>
<td>
<center>v20.4.0</center>
</td>
<td>
<a href="https://nodejs.org" target="_blank">https://nodejs.org</a></center>
</td>
</tr>
<tr>
<td>
<img src="https://cdn-icons-png.flaticon.com/512/1320/1320569.png" width="35" height="35"></img>	
</td>
<td>
<center>SSL/TLS</center>
</td>
<td>
<center>TLS v1.3</center>
</td>
<td>
<a href="https://certbot.eff.org" target="_blank">https://certbot.eff.org</a></center>
</td>
</tr>
</table>
Although it is recommended that you use the Ubuntu Linux distribution, it is not required.

There will be multiple distributions hosted on our servers at <a href="https://distro.xnitc.com/Linux" target="_blank">https://xnitc.com/distro/Linux/</a>

#

`Avalyn Self Hosting Method`

`[Ubuntu]:` <a href="https://distro.xnitc.com/Linux/Ubuntu/" target="_blank">https://xnitc.com/distro/Linux/Ubuntu/</a>

`[Mint]:` <a href="https://distro.xnitc.com/Linux/Mint/" target="_blank">https://xnitc.com/distro/Linux/Mint/</a>

# 

## Avalyn Discord Assistant.

## Version 0.1.2 Beta

As this version is still early in the development of the Avalyn Discord Assistant, it is still in a closed beta phase, once it has been approved to be released as and open beta, it will be released to the public to beta test.

## Disclaimer
Any and all commands, features, or functions mentioned within this documentation will be included within the final project, or within following updates and upgrades.

Documentation Dates
-
- [Established] Date: 02/17/2023
- [Completion] Date: N/A

The Avalyn Project
-
- Avalyn Web UI/RPC Client [Demos]
- - > https://getavalyn.org/ `[Beta]`
- - > https://rpc-client.getavalyn.org/ `[Beta]`

- Social Media
- - > https://twitter.com/avalyn_project/

- Keep in touch
- - > bugs@getavalyn.org
- - > contact@getavalyn.org

Powered by The XNITC Network [2023]

On the web
- https://xnitc.com/
- - > contact@xnitc.com

Avalyn Discord Assistant NPM Requirements
-
- - > Discord.js v14.10.2
- - > CLI-Color v2.0.3
- - > Crypto v1.0.1
- - > Crypto-JS v4.1.1
- - > Cors v2.8.5
- - > Body-Parser v1.20.2
- - > Express v4.18.2
- - > Web3 v4.1.1

#

To install the required NPM packages, within the terminal, in the Avalyn main directory you will need to run the following command.
npm install or npm update

If you would rather install the packages manually, you can easily run the command within the terminal in the Avalyn main directory.

#

`npm install [package]`

or

`npm install [package] –save`

then run `npm update`

#

What is Avalyn?
-
Avalyn is a Discord Assistant that can do more than simply help you with the moderation, organization, and overall management of your Discord servers and channels.

Avalyn can also
- Parse SHA256 Data.
- - Parse Base58 Data.


Avalyn can also assist you with creating Genesis Blocks for your own Blockchains and Cryptocurrencies via the Prototype Alice: Genesis Block Plugin created by The Avalyn Project.

There are so many Avalyn commands and features to come in future updates.

#

The Avalyn Project logos, icons, and trademarks are sole properties of The Avalyn Project, The Avalyn Protocol, The Avalyn Network, XNITC Network.

#

Updates to the
- Assistant application.
- RPC client.
- Web UI.

Are not only up to the creators and developers of the project. We encourage active bug reporting and overall development of commands, features, and functions of the Avalyn Discord Assistant application.

If this project becomes more than the intended “Discord” only application, we welcome that, we would like to give this project as much functionality as possible.
# Avalyn Plugins
Please keep in mind, with the moderation, we do not advise you to use accounts that have high priority or accounts that are “main accounts”, as most of the moderation with Twitter and Roblox accounts and groups moderation accounts are usually operated with accounts known as “Alternate Accounts”.

Avalyn Discord Assistant [Default] Configuration
-
- Requires a separate configuration section.

{ These brackets are required for the initial configuration.

	“token”: “Token_ID”,
	“prefix”: “/”,
	“clientId”: “Client_ID”.
	“guildId”: “Guild_ID”,

} Keep this set of brackets intact.

Avalyn Discord Assistant [Web] Configuration
-
- Requires a separate configuration section.

{ These brackets are not required for the initial configuration.

	“host”: “example.com”,
	“port”: “1280”,
	“rpc_host”: “rpc-client.example.com”,
	“rpc_port”: “1281”,
 
} These brackets can be removed as needed.

Avalyn Twitter Automation
-
- Will require Twitter/X Account Access.
- Requires a separate configuration section.

{ These brackets are not required for the initial configuration.

	“twitter_user”: “TwitterXUsername”,
	“twitter_pass”: “TwitterXPassword”,
 
} These brackets can be removed as needed.

Roblox Group Moderation
-
- Will require Roblox Account Access.
- Requires a separate configuration section.

{ These brackets are not required for the initial configuration.

	“rblx_user”: “RobloxianUsername”,
	“rblx_pass”: “RobloxianPassword”,
 
} <font style="color: red;">These brackets can be removed as needed.</font>

Side note to the users, Avalyn Discord Assistant tries to collect as little data as possible, focusing on a more user friendly and secure Discord user experience.

The only actual data that is used is the data within the configuration, even then it is only passed when it is required and only to the respective locations as needed.

#
