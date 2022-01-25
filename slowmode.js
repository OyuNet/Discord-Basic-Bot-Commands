const Discord = require('discord.js');

module.exports = {
    name: "slowmode",
    description: "Kullanilan kanalda Slowmode acar.",
    execute(message, args) {
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
            const yetkimyok = new Discord.MessageEmbed()
                .setTitle('Yetkim Yok!')
                .setDescription('"Kanalları Yönet" yetkim bulunmuyor. Eklersen işleme devam edebilirim.')
                .setColor('008000')
            return message.channel.send(yetkimyok)
        }

        if (!message.member.hasPermission('MANAGE_CHANNELS')) {
            const yetkinyok = new Discord.MessageEmbed()
                .setTitle('Yetkin Yok!')
                .setDescription('"Kanalları Yönet" yetkin bulunmuyor!')
                .setColor('008000')
            return message.channel.send(yetkinyok)
        }

        let etiketlenenkanal = message.mentions.channel.first();
        let slowmodesure = args.slice(1).join('  ');

        if (!etiketlenenkanal) {
            const kanalyok = new Discord.MessageEmbed()
                .setTitle('Kanal Etiketlemelisin!')
                .setDescription('Çalışabilmem için bir kanal etiketlemen gerekiyor.')
                .setColor('008000')
            return message.channel.send(kanalyok)    
        }

        if (!slowmodesure) {
            const sureyok = new Discord.MessageEmbed()
                .setTitle('Süre Belirtmelisin!')
                .setDescription('Slowmode süresi belirtmelisin evlat.')
                .setColor('008000')
            return message.channel.send(sureyok)
        }

        if (isNaN(slowmodesure)) {
            const suregecerlidegil = new Discord.MessageEmbed()
                .setTitle('Girdiğin Süre Bir Sayı Belirtmiyor!')
                .setDescription('Buraya girdiğin sayı bir doğal sayı belirmiyor. Tekrar dene.')
                .setColor('008000')
            return message.channel.send(suregecerlidegil)
        }

        channel.setRateLimitPerUser(slowmodesure)
        
        const mevzutamam = new Discord.MessageEmbed()
            .setTitle('Slowmode Aktive Edildi!')
            .setDescription(`Slowmode ${slowmodesure} saniye kadar aktive edildi.`)
            .setColor('008000')
        message.channel.send(mevzutamam)    
    }
}