'use strict';

const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
	constructor(config) {
		super({
			disableMentions: 'everyone',
		});
		this.commands = new Collection();
		this.config = config;
	}
};