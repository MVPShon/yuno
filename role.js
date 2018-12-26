const Discord = require("discord.js");
exports.run = async (yuno, message, args) => {
    let role = message.guild.roles.find(r => r.name == args[0]);
    if (message.channel !== yuno.channels.get("526448416285261838")) return message.channel.send(`This command can only be used in ${yuno.channels.get("526448416285261838")}.`)
    if (message.member.roles.has(role.id)) {
        return message.member.removeRole(role.id, message.channel.send("Role Removed."))
    }
    if(args[0] !== "Red" || "Blue" || "Black" || "Purple" || "Orange" || "Green" || "Pink") return message.reply("Please choose from the valid list of roles. ");    
    if (!role) return message.reply("Please choose from the valid list of roles. ")
    message.member.addRole(role)
    message.channel.send("Role Added.")
}