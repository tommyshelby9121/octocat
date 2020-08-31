/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

module.exports = {
	help_embed: {
		title: 'Get Help',
		description: 'Having issues with the bot or don\'t know where to start? Take a look at the commands for the bot or if you\'re still stuck, join our support guild!',
		command_list_field: {
			name: 'Command List',
			value: 'https://github.com/tommyshelby9121/octocat/blob/master/docs/commands.md',
		},
		support_guild_field: {
			name: 'Support Guild',
			value: 'https://discord.gg/WcBzBDA',
		},
		request: 'Requested By:',
	},
	not_owner_embed: {
		description: ':x: Sorry! You cannot execute this command! You are not the owner of the GitHub account associated with this bot',
		request: 'Requested By:',
	},
	no_repo_name_embed: {
		description: ':x: Sorry! Please provide a name for the repository!',
		usage_field: {
			name: 'Usage',
			value: '$createrepo foobar private',
		},
		request: 'Requested By:'
	},
	version: 'v1.0.0',
};