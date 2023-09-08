const { Client, Collection, Events, GatewayIntentBits, ActivityType, Partials, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ButtonStyle, Colors } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Displays the current uptime, websocket heartbeat, and latency of Avalyn.'),
	async execute(interaction, client, message) {
const sent = await interaction.reply({ content: 'Please wait while the latency information is being gathered, it only takes a second.', fetchReply: true });
const empingEmbed = new EmbedBuilder()
	.setColor(0xFF9A47)
	.setAuthor({ name: 'Avalyn Ping/Latency.', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/avalyn.png', url: 'https://xnitc.com' })
	.setDescription(`Here is the status of Avalyn, this is the current uptime, websocket heartbeat, and latency.\n\nAvalyn Uptime: ${Math.round(interaction.client.uptime / 60000)} Minutes\nWebsocket Heartbeat: ${interaction.client.ws.ping}ms.\nRountrip Latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms.`)
	.setThumbnail('https://xnitc.com/discord/bots/Avalyn/data/icons/stopwatch.png')
	.setTimestamp()
	.setFooter({ text: '/ping used at', iconURL: 'https://xnitc.com/discord/bots/avalyn/data/icons/clock.png' });
		await interaction.editReply({ embeds: [empingEmbed] });
	},
};
