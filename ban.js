const Discord = require("discord.js");
exports.run = async (yuno, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
return message.reply("Sorry, you don't have permissions to use this!");
let member = message.mentions.members.first();
if (!member)
return message.reply("Please mention a valid member of this server");
if (!member.bannable)
return message.reply("I cannot ban this user! I may not have the sufficient permissions to ban this user or they may have a higher role than me!");
let reason = args.slice(1).join(' ');
if (!reason) reason = "No reason provided";
await member.ban(reason)
.catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
let embed = new Discord.RichEmbed()
.setAuthor("Ban")
.setColor(0x8600b3)
.setTitle(`${member.user.tag} has been banned by ${message.author.tag}.`)
.setFooter(`${member.user.tag} has been banned.`)
.addField(`Reason:`, `${reason}`)
message.channel.send(embed);
}