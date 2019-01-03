
const Discord = require("discord.js");
exports.run = async (yuno, message, args) => {
let totalSeconds = (yuno.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.round(totalSeconds % 60);
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} second(s).`;
let embed = new Discord.RichEmbed()
    .setAuthor(`Generated Stats`)
    .setColor(0xff6464)
    .addField("Name", yuno.user.tag, true)
    .addField("Bot Owner", yuno.users.get("168865955940794368").tag, true)
    .addField(`Servers `, yuno.guilds.size, true)
    .addField(`Users `, yunoe.users.size, true)
    .addField("Uptime", uptime)
    .addField("Ping", new Date().getTime() - message.createdTimestamp + " ms.")
    .addField("Description", "A Yuno Gasai themed bot for Excalibur's Discord!")
    .setThumbnail(eyuno.user.displayAvatarURL)
message.channel.send(embed);
}
