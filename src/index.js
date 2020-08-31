'use strict';

require('dotenv').config();

// Require Deps
const { readdirSync } = require('fs');
const { join } = require('path');
const Client = require('./struct/Client');
const client = new Client({
	token: process.env.BOT_TOKEN,
	prefix: process.env.BOT_PREFIX,
});

const commandFiles = readdirSync(join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(join(__dirname, 'commands', `${file}`));
	client.commands.set(command.name, command);
}

client.login(client.config.token);