'use strict';

const { noUser, userInfo } = require('../utils/embed');

module.exports = {
	name: 'userinfo',
	description: 'Get specified users info',
	usage: '[username]',
	execute(client, message, args, github) {
		const user = github.getUser(args[0]);
		user.getProfile(async (err, profile) => {
			if (err) {
				await message.react('❌');
				return noUser(client, message);
			}
			await message.react('✅');
			userInfo(client, message, profile);
		});
	},
};