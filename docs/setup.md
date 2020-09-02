# 🔨 Setting up the bot

> **Note:** This bot is made to be run/hosted by yourself on your own server. To keep it online, you must keep the bot process running. If you are unsure on how to host the bot, please check out [hosting octocat](https://github.com/tommyshelby9121/octocat/blob/master/docs/hosting.md) for a in-depth tutorial.

## Prerequisites
1. Create a bot application via the [Discord Developer Portal](https://discord.com/developers/application) 
    - The bot does not need any special perms as of version `1.0.0` so feel free to give which ever permissions you deem necessary
2. Invite the bot to your guild of choice
3. [Install Node.js](https://nodejs.org/en/) version 12 or higher.
    - Anything below Node.js v12 is unsupported. I recommend using a stable version
4. Download the latest version of the bot from the releases page and extract it to a folder
    - The `master` branch is where new code is pushed to, and may contain a few bugs. Most of the times when a release is made, the bugs will be ironed out.
5. In the bot's folder, make a copy of `.env.example` and rename the copy to `.env`

## Environment File

Here, we will be going step by step for what each of the options in the `.env` file means and does for the bot.

### Bot Token
```css
BOT_TOKEN=your_token_here
```

In step 1 of Prerequisites, we created a bot application. Go back to the bot application and generate a token or in other words, a bot token and replace `your_bot_token` with the token you have copied.

### Bot Prefix
```css
BOT_PREFIX=!
```

Here we have the bot prefix. This is what you will use to execute the command. Right now, I have provided `!` as the default but feel free to change it to whichever prefix you like.

### Owner ID
```css
OWNER_ID=your_id
```

Here we have the owner id. This is used to ensure no one else can create or delete your repositories if you have this bot in a public server. To set this up replace `your_id` with the actual user id which will be all numeric. If you are unsure how to get your user id, please check out [this article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

### Github Token
```css
GITHUB_TOKEN=your_account_token_here
```

Here we have the github token. We use this for almost every single command that this bot has and is very much crucial for the bot to work. When you have the token, simply replace `your_account_token_here` with it. You can [click here]() to learn how to get a GitHub token.

### GitHub Username
```css
GITHUB_USERNAME=your_username_here
```

Here we have the github username. Replace `your_username_here` with your GitHub username. For me, it would be `tommyshelby9121`. If you use anyone else's, some commands may not work.

## Generating GitHub Token
1. Click [this link](https://github.com/settings/tokens) which will take you to the required page
    - Make sure you are logged into the account you want to use
2. Click the `Generate new token` button
    - You may be prompted to enter your password, please do so in order to proceed.
3. Add a name/note to your bot. This is just for titling purposes
    - I would recommend naming it `OctoCat` or `Discord Bot`
4. Provide all the scopes as OctoCat will be updated in the future which most likely use all the scopes listed on that page
    - The bot currently, as of version `1.0.0` requires the full `repo` scope, `gist`, full `user` scope and `delete_repo` scope
5. Click `Generate Token`
6. Copy the generated token, make sure you copy it now because you won't be able to do it later

Have any other questions? [Join the support discord!](https://discord.gg/ZxD5EjY)
