const Discord = require('discord.js');

const client = new Discord.Client();

client.once("ready", () => {
    console.log('ready!!!')
})

client.login("Token") // Put your token here

// REMEMBER TO CLICK Ctrl + S to save it or else it won't work!!!