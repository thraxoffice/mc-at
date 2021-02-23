const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
//let kanal = JSON.parse(fs.readFileSync("././jsonlar/sKanal.json", "utf8"));

exports.run = async (client, message, args, config) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  
  
  let channel = message.mentions.channels.first()
  
    if (!channel) {
        return message.reply("** Doğru Kullanım: ** !davet-takip #kanal")
    }

  
    db.set(`dKanal_${message.guild.id}`, "<#"+channel.id+">")
  
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .setDescription(`Davet log kanalınız artık  \n${channel}  Olarak Tanımlanmıştır.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['davet-kanal-belirle','davetkanal','davettakip','davet-takip','davettakipayarla','davet-takip-ayarla'],
    permLevel: 0,
}
exports.help = {
    name: 'davet-takip',
    description: 'Davet kanalını ayarlar.',
    usage: 'davet-kanal-ayarla <#kanal>',
}