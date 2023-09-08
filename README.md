# Avalyn Discord Assistant.
Version 0.1.2 Beta
-
Disclaimer
-
Any and all commands, features, or functions mentioned within this documentation will be included within the final project, or within following updates and upgrades.

Documentation Dates
-
- [Established] Date: 02/17/2023
- [Completion] Date: N/A

The Avalyn Project
-
- On the web: https://avalyn.xnitc.com/
- Twitter: https://twitter.com/avalyn_project/
- GitHub: https://github.com/avalyn-project/
- Bug Reporting: bugs@avyblocks.com

Powered by The XNITC Network [2023]
- On the web: https://xnitc.com/

Avalyn Discord Assistant NPM Requirements
-
- Discord.js v14.10.2
- CLI-Color v2.0.3
- Crypto v1.0.1
- Crypto-JS v4.1.1
- Cors v2.8.5
- Body-Parser v1.20.2
- Express v4.18.2
- Web3 v4.1.1

To install the required NPM packages, within the terminal, in the Avalyn main directory you will need to run the following command.
npm install or npm update

`If you would rather install the packages manually, you can easily run the command within the terminal in the Avalyn main directory.`
- `npm install [package]`
or
- `npm install [package] –save`

What is Avalyn?
-
Avalyn is a Discord Assistant that can do more than simply help you with the moderation, organization, and overall management of your Discord servers and channels.

Avalyn can also
- Parse SHA256 Data.
- Parse Base58 Data.


Avalyn can also assist you with creating Genesis Blocks for your own Blockchains and Cryptocurrencies via the Prototype Alice: Genesis Block Plugin created by The Avalyn Project.

There are so many Avalyn commands and features to come in future updates.

# Discord Commands

Utility Commands
-
`/user` - This command simply displays the information of the command user.

`/ping` - This command simply displays the current Latency/Ping of Avalyn.

`/server` - This command simply displays the current server's information.

`/specs` - This displays information and specifications regarding Avalyn.

`/purge [1-99]` - This removes the specified amount of channel messages.

Moderation Commands
-
`/kick [User]` - This simply kicks a specific user from a Discord server.

`/ban [User]` - This simply bans a specific user from a Discord server.

`/timeout [User]` - This simply puts a specific user in a timeout.

Blockchain Commands
-
`/genesis` - This allows you to generate a Genesis Block for your own Blockchain.

`/print [Number]` - This displays the hash of the specified Avalyn Blockchain blocks.

`/height` - This displays the current height of the Avalyn Blockchain.

`/price [Cryptocurrency]` - This displays the price of a specific cryptocurrency.

Still, this is not all that Avalyn is, as you see the commands /print and /height communicate directly to the Avalyn Blockchain, which was also created by The Avalyn Project!

# Upcoming Commands & Features.
You can find a full listing of commands and features at
- https://avalyn.xnitc.com/commands

Basic Mathematics Commands
-
`/add [35+32]` - This command allows you to solve basic Addition equations.

`/subtract [100-52]` - This command allows you to solve basic Subtraction equations.

`/multiply [250x7]` - This command allows you to solve basic Multiplication equations.

Music Commands
-
`/play [Track]` - This command simply resumes the current track.

`/pause` - This command simply pauses the current track.

`/stop` - This command simply stops the current track.

`/next` - This command simply plays the next track.

`/prev` - This command simply plays the previous track.

`/url [URL of Track]` - This command allows you to play a track from a URL.

`/yt [URL]` - This command allows you to play a track from a YouTube URL.

`/kw [Search Term]` - This command allows you to find tracks from keyword searches.

`/lyrics [Track Name]` - This command allows users to search lyrics of a specified track.

`The Avalyn Project logos, icons, and trademarks are sole properties of The Avalyn Project, The Avalyn Protocol, The Avalyn Network, XNITC Network [2022] [2023].`



# Avalyn Web UI
Avalyn has a built-in customizable light-weight HTTP/HTTPS (SSL) web system, which allows the self hosting of web pages within the Avalyn Framework.

Which includes the following web based settings and configuration.

Avalyn Web Configuration. (Main Configuration)
-
- [Home] (home.html)
- [About] (about.html)
- [Invite] (invite.html)
- [Donate] (donate.html)

Avalyn Web Settings/Configuration. (Developmental)
-
- [Developmental] (hub.html)
- [Avalyn (AVY)] (crypto.html)
- [Avalyn Blockchain] (blocks.html)
- [Avalyn Wallet] (wallet.html)

Avalyn Support/Donation Methods. (Can be changed)
-
- [PayPal] (paypal.html)
- [Bitcoin] (btc.html)
- [Ethereum] (eth.html)
- [Polkadot] (dot.html)

`All support is truly appreciated.`

# Avalyn RPC Client
With the features and commands listed above, there is still more, embedded within its coding is the Avalyn RPC (Remote Procedure Call) Client. Which in some cases allows users to communicate with Avalyn without Discord access, all securely processed client-side.

This light-weight RPC client allows ease of use, as it allows some functions to be operated outside of the Discord Framework.

Some use cases include functions that are bound to the Avalyn Blockchain and the Avalyn Web UI.


Avalyn RPC Usage Cases
-
This includes, but not limited to

- Genesis Block Creation. (/genesis)
- Avalyn Crypto Wallet Creation. (/wallet)
- Avalyn Blockchain Data. (/height, /blocks [Number Number])
- Stock or Cryptocurrency Price Checks. (/stock [Name], /crypto [Name])


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

{

	“token”: “Token_ID”,
	“prefix”: “/”,
	“clientId”: “Client_ID”.
	“guildId”: “Guild_ID”,
 
}

Avalyn Discord Assistant [Web] Configuration
-
- Requires a separate configuration section.

}

	“host”: “avalyn.xnitc.com”,
	“port”: “1280”,
	“rpc_host”: “rpc.xnitc.com”,
	“rpc_port”: “1281”,
 
{

Avalyn Twitter Automation
-
- Will require Twitter/X Account Access.
- Requires a separate configuration section.

{

	“twitter_user”: “TwitterXUsername”,
	“twitter_pass”: “TwitterXPassword”,
 
}

Roblox Group Moderation
-
- Will require Roblox Account Access.
- Requires a separate configuration section.

{
	“rblx_user”: “RobloxianUsername”,
	“rblx_pass”: “RobloxianPassword”,
}

Side note to the users, Avalyn Discord Assistant tries to collect as little data as possible, focusing on a more user friendly and secure Discord user experience.

The only actual data that is used is the data within the configuration, even then it is only passed when it is required and only to the respective locations as needed.


