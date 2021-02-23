const Discord = require('discord.js');
const useful = require('useful-tools')

exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const tarih = new Date()
 
  const arrifentembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField("Tarih", useful.tarih(tarih, 'G A Y'), true)
  .addField("Gün", useful.tarih(tarih, 'g'), true)
  .setThumbnail("http://www.orjinalsaat.org/wp-content/uploads/2015/10/cropped-icon.png")
  .setFooter("Tarih | Tarih", client.user.avatarURL)
  return message.channel.sendEmbed(arrifentembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tarih',
  description: 'Tarihi gösterir.',
  usage: 'tarih'
};