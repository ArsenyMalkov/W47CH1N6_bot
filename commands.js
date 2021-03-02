const moon_phase = require("./commands/moon_phase.js");
const tarot = require("./commands/tarot.js");

const commands = {
    moon_phase,
    tarot
};

module.exports = function(msg) {
    if (msg.content === 'Watching?') {
        msg.channel.send('Sure');
    }

    let tokens = msg.content.split(" ");
    let command = tokens.shift();
    if (command.charAt(0) === "!") {
        command = command.substring(1);
        commands[command](msg, tokens);
    }
};