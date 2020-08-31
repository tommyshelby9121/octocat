/* eslint-disable no-mixed-spaces-and-tabs */
'use strict';

const { notOwnerEmbed, noRepoNameEmbed, repoDeleted } = require('../utils/embed');

module.exports = {
	name: 'deleterepo',
	description: 'Delete a repo',
	usage: '<repo name>',
	async execute(client, message, args, github) {
		const owner = process.env.OWNER_ID;
		if (message.author.id !== owner) {
			await message.react('❌');
			notOwnerEmbed(client, message);
		}
		const repoName = args[0];
		if (!repoName) {
			await message.react('❌');
			noRepoNameEmbed(client, message);
		}
		const user = process.env.GITHUB_USERNAME;
		const repo = github.getRepo(user, repoName);
		repo.deleteRepo().then(() => {
			repoDeleted(client, message, repoName);
		});
	},
};