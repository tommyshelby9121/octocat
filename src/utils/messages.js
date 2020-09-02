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
	},
	not_owner_embed: {
		description: ':x: Sorry! You cannot execute this command! You are not the owner of the GitHub account associated with this bot',
	},
	no_repo_name_embed: {
		description: ':x: Sorry! Please provide a name for the repository!',
		usage_field: {
			name: 'Usage',
			value: '$createrepo foobar private',
		},
	},
	repo_created: {
		title: 'Repository Created',
		description: 'Your repository has been created! Here is some information!',
		repo_name_field: {
			name: 'Repository Name',
		},
		repo_visibility_field: {
			name: 'Repository Visibility',
		},
		git_url_field: {
			name: 'Git URL',
		},
		ssh_url_field: {
			name: 'SSH URL',
		},
		clone_url_field: {
			name: 'Clone URL',
		},
	},
	repo_deleted: {
		description: 'has been deleted',
	},
	user_info: {
		description: '**Bio**',
		name_field: {
			name: 'Name',
		},
		company_field: {
			name: 'Company',
		},
		location_field: {
			name: 'Location',
		},
		public_repos_field: {
			name: 'Public Repositories',
		},
		public_gists_field: {
			name: 'Public Gists',
		},
		followers_field: {
			name: 'Followers',
		},
		following_field: {
			name: 'Following',
		},
	},
	version: 'v1.0.0',
	requested_by: 'Requested By:',
};