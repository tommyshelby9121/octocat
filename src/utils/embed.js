'use strict';
const { MessageEmbed } = require('discord.js');
const { help_embed, not_owner_embed, no_repo_name_embed, repo_created, version } = require('./messages');
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

// Error Embeds
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
		.setFooter(`${client.user.username} ${version} | ${no_repo_name_embed.request}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

// Success Embeds
function repoCreated(client, message, res) {
	let repoVisibility;
	if (res.data.private === false) {
		repoVisibility = 'public';
	}
	else {
		repoVisibility = 'private';
	}
	const embed = new MessageEmbed()
		.setTitle(repo_created.title)
		.setDescription(repo_created.description)
		.setColor(success)
		.addField(repo_created.repo_visibility_field.name, repoVisibility)
		.addField(repo_created.repo_name_field.name, res.data.name)
		.addField(repo_created.git_url_field.name, res.data.git_url)
		.addField(repo_created.ssh_url_field.name, res.data.ssh_url)
		.addField(repo_created.clone_url_field.name, res.data.clone_url)
		.setURL(res.data.html_url)
		.setThumbnail(res.data.owner.avatar_url)
		.setFooter(`${client.user.username} ${version}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

module.exports = {
	helpEmbed,
	notOwnerEmbed,
	noRepoNameEmbed,
	repoCreated,
};