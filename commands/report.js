const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete(1000)
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Kan de speler niet vinden.").then(msg => {msg.delete(3000)}).catch(console.error);
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("__**Report**__")
  .setColor("#ff0000")
  .addField("Reported User:", `${rUser}`)
  .addField("Reported By:", `${message.author}`)
  .addField("Reason:", reason)
  .addField("Reported at:", message.createdAt);

  let reportsChannel = message.guild.channels.find('name', "reports");
  reportsChannel.send(reportEmbed);
}

module.exports.help = {
  name: "report"
}
