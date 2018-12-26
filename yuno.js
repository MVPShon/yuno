const Discord = require("discord.js");
let yuno = new Discord.Client();
let prefix = "y!";
yuno.on("guildMemberAdd", member => {
    let welcmsgs = [
        `${member}, welcome to the server! Make your way to the Color Assignments channel to chose a color role that you'd like.`,
        `We usually do not allow your kind, ${member}, but today we'll accept it. Make your way to the Color Assignments channel to chose a color role that you'd like.`,
        `Consider yourself lucky, ${member}, that Yuki says it's fine you're here. Make your way to the Color Assignments channel to chose a color role that you'd like.`,
        `${member}, enjoy your stay! Make your way to the Color Assignments channel to chose a color role that you'd like.`
    ]
        let randwelc = Math.floor((Math.random() * welcmsgs.length));
    yuno.channels.get("352295908546838528").send(`${welcmsgs[randwelc]}`)
    });
    yuno.on("guildMemberRemove", member => {
        yuno.channels.get("352295908546838528").send(`${member} has decided to leave our server. :(`)
    })
yuno.on("ready", async () => {
    let statuses = [
        `over ${yuno.users.size} people!`,
        `\"${prefix}` + `help\" for help with ${yuno.user.username}`,
        `newest anime episodes!`
    ]

    console.log("Yuno Gasai is ready to go!")
    setInterval(function() {
    let status = Math.floor((Math.random() * statuses.length));
    yuno.user.setActivity(statuses[status], {
        type: 'WATCHING'
    })
    }, 15000)
});
yuno.on("message", message => {
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

    if(message.author.yuno) return;     
    if(!message.content.startsWith(prefix)) return;

    try {
        let commandFile = require(`./Commands/${cmd}.js`);
        commandFile.run(yuno, message, args, prefix);
    } catch (e) {
        return;
    }
})
yuno.login("NTI2OTU0NTg1NjcyMTIyNDA5.DwMt7A.LxtPxQKxYDU3x04lARIjuRwQDpE");