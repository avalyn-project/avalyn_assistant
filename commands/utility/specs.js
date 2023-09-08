const { Client, Collection, Events, GatewayIntentBits, ActivityType, Partials, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonStyle, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('specs')
		.setDescription('Displays statistics of the server.'),
	async execute(interaction, client) {
const sent = await interaction.reply({ content: 'Please wait while the Avalyn [Beta|v0.1.2] information is being gathered, it only takes a second.', fetchReply: true });

const emspecsEmbed = new EmbedBuilder()
	.setColor(0xFF9A47)
	.setAuthor({ name: 'Avalyn Specifications.', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/avalyn.png', url: 'https://xnitc.com' })
	.setDescription('Hello, my name is `Avalyn`.\nI am a `Discord` `assistant` that can do more than `moderate` and `organize` your `Discord` `servers`.\n\nI am also able to\n --[`Parse` `SHA256` `Data`.\n --[`Parse` `Base58` `Data`\nI can also assist in the `creation` `of` `Blockchains`, via the `Genesis` `Block` `Generator` and the `development` `of` `Cryptocurrencies`!\n\nI was created using\n--[`NodeJS 20.1.0`.\n\nAlso, I am currently operating with the following required NPM packages.\n --[`Discord.JS 14.10.2`\n --[`CLI-Color 2.0.3`\n --[`Crypto 1.0.1`\n --[`Crypto-JS 4.1.1`\n --[`Cors 2.8.5`\n --[`Body-Parser 1.20.2`\n --[`Express 4.18.2`\n --[`Web3 4.1.1`\n\nIf you would like to support The Avalyn Project, you can do so at https://avalyn.xnitc.com/donate\n\n`Application [Site]`\nhttps://xnitc.com/\n`Avalyn [Version Notes]`\nhttps://xnitc.com/data/avalyn/version\n\nAlso, as of right now, any and all `glitches`, `bugs`, `errors`, found within my coding can be sent to `contact@xnitc.com`.\n\n')
	.setThumbnail('https://xnitc.com/discord/bots/avalyn/data/icons/robot.png')
	.setTimestamp()
	.setFooter({ text: '/specs used at', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/clock.png' });
		await interaction.editReply({ embeds: [emspecsEmbed] });
	},
};
