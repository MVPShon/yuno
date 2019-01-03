const Discord = require("discord.js");
let prefix = "y!";
exports.run = async (yuno, message, args) => {
let embed = new Discord.RichEmbed()
.setAuthor(`Help`)
.setColor(0x8600b3)
.addField("Info", "To find basic info on the bot, just type `" + prefix + "info`")
.addField("Ban","Bans a user.")
.addField("Kick", "Kicks a user.")
.addField("Insult","Insult yourself or others!")
.addField("MAL","Search for anime on My Anime List.")
.addField("Purge","Delete between 2-100 lines of text.")
.addField("Whois","Info about a user.")
.addField("Quote","Random anime quote.")
.addField("MusicHelp", "List of all available music commands.")
message.channel.send(embed)
}
