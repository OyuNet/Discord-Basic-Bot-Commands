const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "Help komutu",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('Yardım Mı Lazım? :v: (Prefix = m.)')
            .setColor('#008000')
            .addField('Clear', '100 mesaja kadar mesaj silmenize olanak sağlar. Discord API dolayısıyla 15 günden önce atılmış mesajları silemiyorum.')
            .addField('Kick', 'Etiketlediğiniz ilk kullanıcıyı atmanızı sağlar. İşlemin gerçekleşmesi için "Üyeleri At" yetkinizin ve yetkimin olması gerek.')
            .addField('Ban', 'Etiketlediğiniz ilk kullanıcıyı banlamanızı sağlar. İşlemin gerçekleşmesi için "Üyeleri Yasakla" yetkinizin ve yetkimin olması gerek.')
            .addField('Setname', 'Etiketlenen kullanıcının ismini değiştirir. Örnek kullanım: [prefix]setname @hedefkullanıcı yeniisim')
            .addField('Stats', 'Botun anlık istatistiklerini görebilirsiniz.')
            .addField('Bug', 'Keşfettiğiniz bugları geliştiriciye doğrudan iletmenizi sağlar.')
            .addField('Invite', 'Botu beğendiyseniz botu sunucunuza eklemek için bir link alırsınız.')
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}