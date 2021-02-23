const Discord = require('discord.js'); 

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setFooter(`${message.author.username} Tarafından `, message.author.avatarURL)
   message.channel.send('**Sunucudaki Tüm Yasakları Kaldırdım!** ')
       return message.channel.sendEmbed(embed);


  message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ub","banlarıkaldır"],
  permLevel: 3
};

exports.help = {
  name: 'unbanall',
  description: 'Sunucudaki Tüm Yasaklı Kullanıcıların Yasağını Kaldırır!',
  usage: 'unbanall '
};