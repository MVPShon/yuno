
const Discord = require("discord.js");
let prefix = "y!";
exports.run = async (evileye, message, args) => {
let embed = new Discord.RichEmbed()
.setAuthor(`Music Help`)
.setColor(0xff6464)
.addField("Join/Leave", "Let Evileye join/leave the current voice channel that you're in.")
.addField("NowPlaying", "Shows the current song being played. *Aliases: y!song or y!np*")
.addField("Pause", "Pause the song being played.")
.addField("Play","Search for a song to play. React with a number from 1-5 for the corresponding song. *y!play Hello*")
.addField("Queue","Shows upcoming songs.")
.addField("Skip","Skip the current song.")
message.channel.send(embed)
}
