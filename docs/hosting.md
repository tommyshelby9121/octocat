# Hosting OctoCat

We will be going over on how to host the bot by yourself on a VPS (Virtual Private Server).

## Prerequisites
> **Note:** I will not be going over the basics such as creating a server, logging in via ssh and the other basics. Feel free to research that on your own time!
1. Familiarize yourself with Linux since this tutorial will be for Ubuntu 20.4
2. Choose a good hosting provider. You can look up some for yourself but for this, I will be recommending Digital Ocean. You can use my referral code [here](https://m.do.co/c/0ca904582444) to earn $100 for free for 60 days
    - The $5/mo plan would be plenty for OctoCat version `1.0.0`
3. Have SSH setup on the VPS for maximum protection and not use root user. Please check out [this article](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04) if you're unsure how to create new users.

### Update Repositories List
```css
sudo apt update
```

### Installing Node.js v12
```css
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs

node --version
```

Run the last command to see if the latest update of Node.js version 12 is installed properly.

### Getting OctoCat Code
Here, I will be downloading OctoCat to the `/bin` folder, but feel free to do it anywhere you like.
```css
cd /bin

git clone https://github.com/tommyshelby9121/octocat.git
```

### Installing Project Dependencies
```css
cd octocat

npm install

# Start bot
npm start

# Turn bot off
ctrl+C
```

### Setup PM2 process manager
```css
sudo npm i pm2 -g

pm2 start src/index

# To make sure bot comes online when reboot
pm2 startup ubuntu
```

Having issues? [Join the support discord!](https://discord.gg/ZxD5EjY)