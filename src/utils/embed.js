'use strict';
const { MessageEmbed } = require('discord.js');
const { help_embed, version } = require('./messages');
const { success } = require('./colors');

function helpEmbed(client, message) {
	const embed = new MessageEmbed()
		.setTitle(help_embed.title)
		.setDescription(help_embed.description)
		.setColor(success)
		.addField(help_embed.command_list_field.name, help_embed.command_list_field.value)
		.addField(help_embed.support_guild_field.name, help_embed.support_guild_field.value)
		.setFooter(`${client.user.username} ${version} | ${help_embed.request}: ${message.author.tag}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

module.exports = {
	helpEmbed,
};