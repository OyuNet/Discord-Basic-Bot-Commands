const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kick komutu",
    execute(message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            const yetkinyok = new Discord.MessageEmbed()
                .setTitle('Yetkin Yok!')
                .setDescription('Üyeleri atma yetkin yok, benden kaçmaz :sunglasses:')
                .setColor('#008000')
            return message.channel.send(yetkinyok)
        }

        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            const yetkimyok = new Discord.MessageEmbed()
                .setTitle('Yetkim Yok :(')
                .setDescription('Galiba "Moderation+" rolünde "Üyeleri At" yetkisi yok. Eklemeni rica ediyorum <3')
                .setColor('#008000')
            return message.channel.send(yetkimyok)
        }

        const user = message.mentions.members.first();

            if(!user) {
                const etiketlemenlzm = new Discord.MessageEmbed()
                    .setTitle('Birini Etiketlemedin!')
                    .setDescription('Atılacak kişiyi etiketlemen gerekiyor!')
                    .setColor('#008000')
                return message.channel.send(etiketlemenlzm)
            }
        
        if(user.id === message.author.id) {
            const kendiniatmazsin = new Discord.MessageEmbed()
                .setTitle('Kendini atamazsın!')
                .setDescription('Reis aman aman neler peşindesin öyle :D')
                .setColor('#008000')
            return message.channel.send(kendiniatmazsin)
        }

        const kicked = new Discord.MessageEmbed()
            .setTitle('Operasyon tamamlandı!')
            .setDescription(`Etiketlediğin ${user} isimli kullanıcı atıldı.`)
            .setColor('#008000')
            .setFooter(`${message.author.username} tarafından atıldı.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(kicked)

        user
            .kick(`Moderation+ tarafından ${message.author.username} talebi üzerine gerçekleştirildi!`)
    }
}