const Discord = require("discord.js");
exports.run = async (yuno, message, args) => {
message.reply(new Date().getTime() - message.createdTimestamp + " ms.")
}
