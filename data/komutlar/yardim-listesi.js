const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription(
      "**•** **!yetkili** Sunucuyu yönetmek için gerekli olan komutlar.\n**•** **!eğlence** Eğlenmek için bulunan komutlar.\n**•** **!kullanıcı** Kullanıcılar için komutlar.\n**•** **!bot** Bot ile alakalı komutları görürsünüz."
    )
    .addField(
      "» Linkler",
      `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=662355232591970321&scope=bot&permissions=805314622)` +
        "**\n**" +
        `[Bota Oyver](https://botsfordiscord.com/bot/650739604789395476/vote)` +
        "**\n**" +
        `[Destek Sunucusu](https://discord.gg/AHe4u4m)`,
      false
    )
    .setFooter("iBOT | Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
