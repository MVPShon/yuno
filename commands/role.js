const Discord = require("discord.js");
exports.run = async (yuno, message, args) => {
let colors = ["Red", "Blue", "Black", "Purple", "Orange", "Green", "Pink"];

if(colors.indexOf(args[0]) > "-1") {

//If it is one of those colors 

    let role = message.guild.roles.find(r => r.name == args[1]);
    if (message.member.roles.has(role.id)) return message.member.removeRole(role.id, message.channel.send("Role Removed."));
    
    message.member.addRole(role)
    message.channel.send("Role Added.")

} else {

//If it isn't one of those colors
return message.reply("Please choose from the valid list of roles. ");

}
}
