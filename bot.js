const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

    if (message.content === '!tsundere') {
    	message.channel.send('no');
  	}

client.login(process.env.BOT_TOKEN);
