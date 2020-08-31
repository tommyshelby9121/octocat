'use strict';
const { MessageEmbed } = require('discord.js');
const { help_embed, not_owner_embed, no_repo_name_embed, version } = require('./messages');
const { success, error } = require('./colors');

function helpEmbed(client, message) {
	const embed = new MessageEmbed()
		.setTitle(help_embed.title)
		.setDescription(help_embed.description)
		.setColor(success)
		.addField(help_embed.command_list_field.name, help_embed.command_list_field.value)
		.addField(help_embed.support_guild_field.name, help_embed.support_guild_field.value)
		.setFooter(`${client.user.username} ${version} | ${help_embed.request} ${message.author.tag}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

function notOwnerEmbed(client, message) {
	const embed = new MessageEmbed()
		.setDescription(not_owner_embed.description)
		.setColor(error)
		.setTimestamp()
		.setFooter(`${client.user.username} ${version} | ${not_owner_embed.request} ${message.author.tag}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

function noRepoNameEmbed(client, message) {
	const embed = new MessageEmbed()
		.setDescription(no_repo_name_embed.description)
		.setColor(error)
		.addField(no_repo_name_embed.usage_field.name, no_repo_name_embed.usage_field.value)
		.setTimestamp()
		.setFooter(`${client.user.username} ${version} | `, message.author.displayAvatarURL());

	message.channel.send(embed);
}

module.exports = {
	helpEmbed,
	notOwnerEmbed,
	noRepoNameEmbed,
};