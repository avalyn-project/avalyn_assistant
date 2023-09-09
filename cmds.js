console.clear()
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
var clc = require("cli-color");

const commands = [];
// Grab all the command files from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

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
