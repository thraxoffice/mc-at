const Discord = require("discord.js");
exports.run = async function(client, message, args) {

if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**\`Yönetici\`** İznine Sahip Olman Gerek.`)
  let yasak = await message.guild.fetchBans();
  yasak = yasak.array(); 
  yasak.forEach(function(ban) {
    message.guild.unban(ban.id);

        message.channel.send(`${yasak} Adlı Tüm Kullanıcıların Yasağı Kalktı!`);

  });
            
   
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban-all'],
  permLevel: 2
};

exports.help = {
  name: 'unbanall',
  description: 'banlıların yasaklarını kaldırır',
  usage: 'unbanall'
};