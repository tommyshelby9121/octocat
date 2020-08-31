'use strict';
const { helpEmbed } = require('../utils/embed');

module.exports = {
	name: 'help',
	description: 'Help command',
	usage: '[command]',
	async execute(client, message) {
		await message.react('✅');
		helpEmbed(client, message);
	},
};