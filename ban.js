const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "ban komutu",
    execute(message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            const yetkinyok = new Discord.MessageEmbed()
                .setTitle('Yetkin Yok!')
                .setDescription('Üyeleri banlama yetkin yok, benden kaçmaz :sunglasses:')
                .setColor('#008000')
            return message.channel.send(yetkinyok)
        }

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            const yetkimyok = new Discord.MessageEmbed()
                .setTitle('Yetkim Yok :(')
                .setDescription('Galiba "Moderation+" rolünde "Üyeleri Yasakla" yetkisi yok. Eklemeni rica ediyorum <3')
                .setColor('#008000')
            return message.channel.send(yetkimyok)
        }

        const user = message.mentions.members.first();

            if(!user) {
                const etiketlemenlzm = new Discord.MessageEmbed()
                    .setTitle('Birini Etiketlemedin!')
                    .setDescription('Banlanılacak kişiyi etiketlemen gerekiyor!')
                    .setColor('#008000')
                return message.channel.send(etiketlemenlzm)
            }
        
        if(user.id === message.author.id) {
            const kendiniatmazsin = new Discord.MessageEmbed()
                .setTitle('Kendini Banlayamazsın!')
                .setDescription('Reis aman aman neler peşindesin öyle :D')
                .setColor('#008000')
            return message.channel.send(kendiniatmazsin)
        }

        const banned = new Discord.MessageEmbed()
            .setTitle('Operasyon tamamlandı!')
            .setDescription(`Etiketlediğin ${user} isimli kullanıcı banlandı.`)
            .setColor('#008000')
            .setFooter(`${message.author.username} tarafından banlandı.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(banned)

        user
            .ban(`Moderation+ tarafından ${message.author.username} talebi üzerine gerçekleştirildi!`)
    }
}