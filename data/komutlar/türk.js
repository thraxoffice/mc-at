const Discord = require('discord.js')

exports.run = (client, message, args) => {    
  if ( message.react(':flag_tr:')) {
      var gif = [
      'https://media.giphy.com/media/yDm4Ry6XU77Py/giphy.gif', 'https://media1.tenor.com/images/6052fceee3bab1c98cde4e590c8be111/tenor.gif?itemid=11841187', 'https://media1.tenor.com/images/6878bb87d692b3989a80c31cdf13e9da/tenor.gif?itemid=12338397', 'https://media.tenor.com/images/a607e013adc87fc3a792cf1876b79800/tenor.gif', 'https://media.tenor.com/images/31c9000ffd5dcbc7337ada12d23eaac2/tenor.gif', 'https://media1.tenor.com/images/dbe865a1d72910f0a4e26211ffda5e5c/tenor.gif?itemid=12498400', 'https://media.tenor.com/images/5b72a84f80a8d1ceec341d5d639080dc/tenor.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react(':flag_tr:')) {
    const op = new Discord.RichEmbed()
    .setDescription(`**NE MUTLU TÜRKÜM DİYENE!** :flag_tr:`)
    .setColor('RANDOM')
    .setImage(gifler)
    .setFooter(`MaximusBoysBOT`)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['flag','trflag','türk-resim','türkresim'],
  permLevel: 0
};

exports.help = {
  name: 'türk',
  description: 'Türk bayrağı gönderir.',
  usage: 'türk'
};