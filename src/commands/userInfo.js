'use strict';

const {userInfo} = require('../utils/embed')

module.exports = {
	name: 'userinfo',
	description: 'Get specified users info',
	usage: '[username]',
	async execute(client, message, args, github) {
		const user = github.getUser(args[0]);
		user.getProfile((err, profile) => {
			if (err) throw err;
			userInfo(client, message, profile);
		});
	},
};