const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMzODYyMzA5NTE0ODY2NzU4.YentDA.KXbK26mbPcyoJUOY8jco7kd-69c"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.on('guildMemberAdd', (member) => {
    
});

client.login(process.env.TOKEN)