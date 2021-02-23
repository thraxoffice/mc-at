const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
   
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tik");
  const arrifentembed = new Discord.RichEmbed()
  .setColor("black")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL}`)
        .addField(`￥ Ses kanallarında ${count} kişi bulunmaktadır.`, `￥ Sunucuda ${message.guild.memberCount} kişi bulunmaktadır.`)
        .setThumbnail("https://cdn.discordapp.com/attachments/583680695293968404/601813274090274836/giphy.gif")
        .setTimestamp()
        .setFooter(`Developed : Asreaperhttps://cdn.discordapp.com/avatars/434767868589113345/a_0ba16a5345e708d04448643345f658b0.gif?size=2048`)
 
  message.channel.sendEmbed(arrifentembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'kullanıcıyı susturur.',
  usage: 'say'
};