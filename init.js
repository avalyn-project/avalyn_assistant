
// *********************************************************************************************************** //
// Welcome to the Avalyn Discord assistant, what you can do with this application is simple, you can           //
// easily moderate your discord servers.                                                                       //
//                                                                                                             //
// But, the difference is, The Avalyn Project, is also embedded within, allowing you to use                    //
// 'The Avalyn Project' to create your own Blockchain and Blockchain tools!                                    //
//                                                                                                             //
// <Q:> How is that possible?                                                                                  //
// <A:> Well, with the included plugins created by                                                             //
//      The Avalyn Project (c) 2023.                                                                           //
//                                                                                                             //
//                                                                                                             //
//                                                                                                             //
//                                                                                                             //
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
// ********************************************************************************************************** //
require("./lib/core/http/server.js");
require("./lib/core/rpc/client.js");

console.log(clc.white(` Logged in as `) + clc.green(`${c.user.tag}\n ---------------------------------------------------------------`));
client.user.setStatus(`idle`);
client.user.setActivity({
    name: "🖥️",
    type: ActivityType.Streaming,
    url: "https://twitch.tv/avalyn_project",
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

console.clear()
const { REST, Routes } = require('discord.js');


const commands = [];
// Grab all the command files from the commands directory you created earlier

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(clc.white(` Welcome to the Avalyn Discord assistant.\n\n [`) + clc.cyan(`On The Web`) + clc.white(`]: `) + clc.green(`https://`) + clc.white(`getavalyn.org/\n [`) + clc.cyan(`About Avalyn`) + clc.white(`]: `) + clc.green(`https://`) + clc.white(`getavalyn.org/about\n`) + clc.green(`\n ---------------------------------------------------------------\n`) + clc.white(` Started refreshing `) + clc.green(`${commands.length} `) + clc.white(`application (`) + clc.green(`/`) + clc.white(`) commands`) + clc.green(`.`));

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(clc.white(` Successfully refreshed `) + clc.green(`${data.length} `) + clc.white(`application (`) + clc.green(`/`) + clc.white(`) commands`) + clc.green(`.\n`));
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

client.login(token);
