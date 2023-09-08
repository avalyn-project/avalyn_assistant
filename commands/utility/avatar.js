const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, GatewayIntentBits, Client, Events } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply({ content: `${user.username}'s avatar: ${user.displayAvatarURL()}`, ephemeral: true });
		return interaction.reply({ content: `Your avatar: ${interaction.user.displayAvatarURL()}`, ephemeral: true });
	},
};
