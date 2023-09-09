
// *********************************************************************************************************** //
// Copytight (c) 2023 The Avalyn Project                                                                       //
// *********************************************************************************************************** //

const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType, Partials, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonStyle, Colors } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
var clc = require("cli-color");
const { Guilds, GuildMembers, GuildMessages, MessageContent, DirectMessages } = GatewayIntentBits;
const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, c => {

// ********************************************************************************************************** //
// This is where you are going to load the 'Local/Client-Side' console commands and the 'Local' GUI settings. //
// Loading the following settings, such as:                                                                   //
//                                                                                                            //
// The initial connection to the GUI Server and Port, you can use the official servers that are operated by   //
// The Avalyn Project.                                                                                        //
//                                                                                                            //
// Server [UI]: getavalyn.org                                                                                 //
// Server [RPC]: rpc-client.getavalyn.org                                                                     //
// Port [1]: 1280                                                                                             //
// Port [2]: 1281                                                                                             //
// ********************************************************************************************************** //
require("./lib/core/http_secure/server.js");
require("./lib/core/rpc/client.js");

console.log(clc.white(` Logged in as `) + clc.green(`${c.user.tag}\n ---------------------------------------------------------------`));
client.user.setStatus(`idle`);
client.user.setActivity({
    name: "🖥️",
    type: ActivityType.Streaming,
    url: "https://twitch.tv/avalyn_js",
});

});

client.on(Events.InteractionCreate, async interaction => {

	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

require('./cmds.js');
client.login(token);
