console.log('Start');

const Discord = require('discord.js');
require('dotenv').config();

const commandHandler = require('./commands');

const client = new Discord.Client();

client.once('ready', () => {
    console.log(`${client.user.tag} started`);
});

client.on('message', commandHandler);

client.login(process.env.BOT_TOKEN);
