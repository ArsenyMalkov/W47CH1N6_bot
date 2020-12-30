console.log('Start');

const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} started`);
});

client.on('message', gotMessage);

function gotMessage(msg) {
    if (msg.content === 'Watching?') {
        msg.channel.send('Sure');
    }
}