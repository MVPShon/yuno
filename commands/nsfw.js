const Discord = require("discord.js");
let prefix = "y!";
exports.run = async (yuno, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`NSFW Commands for Yuno Gasai`)
    .setColor(0x8600b3)
    .setThumbnail(yuno.user.displayAvatarURL)
    .addField("4k", "Searches for some 4k wallpapers.")
    .addField("Ass", "Searches for booty pics. *Also works with `" + prefix + "booty` and `" + prefix + "butt`*")
    .addField("BDSM","Pulls BDSM pics off of Reddit.")
    .addField("Ecchi","Pulls ecchi pics off of Reddit.")
    .addField("Gay", "Pulls random pictures of 2 (or more) guys. *Also works with `" + prefix + "homo` and `" + prefix + "twink`*")
    .addField("Hentai", "Pulls a random hentai picture off of Reddit.")
    .addField("Lesbian","Pulls random pictures of 2 (or more) girls.")
    .addField("RedditSearch","Search a specific Subreddit for a random picture. *`Usage: " + prefix + "redditsearch 60FPSPorn`*")
    .addField("Thigh","Thick thighs save lives. *Also works with `" + prefix + "thighs`*")
    .addField("Tits", "Searches for some nice tits. *Also works with `" + prefix + "boobs`*")
    .addField("Yaoi","Pulls random Yaoi pics off Reddit.")
    .addField("Rule34/R34", "Searches https://rule34.xxx for hentai tags. *`Usage: " + prefix + "rule34 Yuno_Gasai` Note - Spaces are represented as UNDERSCORES on the R34 website*")
message.channel.send(embed)
}