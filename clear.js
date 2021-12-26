const Discord = require('discord.js');

module.exports = {
    name: "clear",
    description: "Mesajları silmeye yarayan bir komut.",
    execute(message, args) {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            const yetkinyok = new Discord.MessageEmbed()
                .setTitle('Yetkin Yok!')
                .setDescription('Mesajları yönetme yetkin yok, benden kaçmaz :sunglasses:')
                .setColor('#008000')
            return message.channel.send(yetkinyok).then(msg => msg.delete({timeout:"5000"}))
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            const busayidegil = new Discord.MessageEmbed()
                .setTitle('Verdiğin Parametre Bir Doğal Sayı Değil!')
                .setDescription('Komutu girdikten sonra yazdığın miktar bir doğal sayı değil. Bu yüzden işlemini gerçekleştiremiyorum.')
                .setColor('#008000')
            return message.channel.send(busayidegil).then(msg => msg.delete({timeout:"5000"}))
        }

        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            const yetkimyok = new Discord.MessageEmbed()
                .setTitle('Yetkim Yok!')
                .setDescription('Galiba "Moderation+" rolünde "Mesajları Yönet" yetkisi yok. Eklemeni rica ediyorum <3')
                .setColor('#008000')
            return message.channel.send(yetkimyok).then(msg => msg.delete({timeout:"5000"}))
        }

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            const silindi = new Discord.MessageEmbed()
            .setTitle('Mesajlar Silindi!')
            .setDescription(`${deleteAmount} tane mesaj yok edildi :thumbsup:`)
            .setColor('#008000')
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(silindi).then(msg => msg.delete({timeout:"5000"}))
    }
}