'use strict';

const { notOwnerEmbed, noRepoNameEmbed, repoCreated } = require('../utils/embed');

module.exports = {
	name: 'createrepo',
	description: 'Create a repository',
	usage: '<repo name> [public/private]',
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
		const repoVisibility = args[1];
		if (!repoVisibility || repoVisibility === false) {
			const user = github.getUser();
			user.createRepo({
				name: repoName,
				private: false,
			}).then((res) => {
				repoCreated(client, message, res);
			});
		}
		else if (repoVisibility === true) {
			const user = github.getUser();
			user.createRepo({
				name: repoName,
				private: true,
			}).then((res) => {
				repoCreated(client, message, res);
			});
		}
	},
};