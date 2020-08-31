'use strict';
const { MessageEmbed } = require('discord.js');
const { success } = require('./colors');

function helpEmbed(client, message) {
	const embed = new MessageEmbed()
		.setTitle('Get Help')
		.setDescription('Having issues with the bot or don\'t know where to start? Take a look at the commands for the bot or if you\'re still stuck, join our support guild!')
		.setColor(success)
		.addField('Command List', 'https://github.com/tommyshelby9121/octocat/blob/master/docs/commands.md')
		.addField('Support Guild', 'https://discord.gg/WcBzBDA')
		.setFooter(`${client.user.username} | Requested By: ${message.author.tag}`, message.author.displayAvatarURL());

	message.channel.send(embed);
}

module.exports = {
	helpEmbed,
};