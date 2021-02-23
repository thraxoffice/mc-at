//    let çarpı = client.emojis.get("654344235620892682")
// let tik = client.emojis.get("654344235784470539")
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  let çarpı = bot.emojis.get("654344235620892682")
  if (message.author.id !== 'iD') return message.channel.send(çarpı + " Bu komutu sadece `Yapımcım` **kullanabilir!**")
  let nesne = args[0]
  let çarpı2 = bot.emojis.get("654344235620892682")
  if (!nesne) return message.channel.send(çarpı2 + ' **Gold üyelikten çıkacak kişinin idsini girermisin başkan.**')
  
 await db.delete(`gold_${nesne}`, 'tm')
  let tik = bot.emojis.get("654344235784470539")
  let kanal = message.guild.channels.find("name", "➵gold-üye-log")
  message.channel.send(`${tik} <@${nesne}> kullanıcısı yani **${nesne}** IDli kullanıcı gold üyelikten çıktı!`)
  kanal.send(`${tik} <@${nesne}> kullanıcısı için gold üyeliği **kapandı!**`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'gold-çıkar',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
