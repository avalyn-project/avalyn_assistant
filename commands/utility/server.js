const { Client, Collection, Events, GatewayIntentBits, ActivityType, Partials, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonStyle, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Displays statistics of the server.'),
	async execute(interaction, client, message) {
const emserverEmbed = new EmbedBuilder()
	.setColor(0xFF9A47)
	.setAuthor({ name: 'Server Information & Statistics.', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/avalyn.png', url: 'https://xnitc.com' })
	.setDescription(`You have used the **/server** to check the server information and statistics.\n\nServer Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`)
	.setThumbnail('https://xnitc.com/discord/bots/avalyn/data/icons/server.png')
	.setTimestamp()
	.setFooter({ text: '/server used at', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/clock.png' });
		await interaction.reply({ embeds: [emserverEmbed] });
	},
};
