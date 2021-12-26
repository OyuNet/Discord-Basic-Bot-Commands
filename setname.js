const Discord = require('discord.js');

module.exports = {
    name: "setname",
    description: "Kullanıcı nickname değiştirmeyi sağlar.",
    execute(message, args) {
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) {
            const yetkimyok = new Discord.MessageEmbed()
                .setTitle('Yetkim Yok!')
                .setDescription('"Kullanıcı Adı Değiştir" yetkim bulunmuyor. Eklersen işleme devam edebilirim.')
                .setColor('008000')
            return message.channel.send(yetkimyok)
        }

        if (!message.member.hasPermission('MANAGE_NICKNAMES')) {
            const yetkinyok = new Discord.MessageEmbed()
                .setTitle('Yetkin Yok!')
                .setDescription('"Kullanıcı Adı Değiştir" yetkin bulunmuyor!')
                .setColor('008000')
            return message.channel.send(yetkinyok)
        }
        
        let user = message.mentions.members.first();
        let yeniisim = args.slice(1).join(' ');
        if(!yeniisim) {
            const isimgir = new Discord.MessageEmbed()
                .setTitle('Değiştirilecek İsmi Girmen Gerek!')
                .setDescription('Henüz bir isim girmemişsin! Örnek kullanım "[prefix]setname @hedefkullanıcı yeniisim"')
                .setColor('008000')
            return message.channel.send(isimgir)
        }

        if(!user) {
            const etiket = new Discord.MessageEmbed()
                .setTitle('Kullanıcı Etiketlememişsin!')
                .setDescription('Hedef kullanıcıyı etiketlememişsin! Örnek kullanım "[prefix]setname @hedefkullanıcı yeniisim"')
                .setColor('008000')
            return message.channel.send(etiket)
        }

        if(yeniisim.length > 32) {
            const uzun = new Discord.MessageEmbed()
                .setTitle('Yeni İsim Çok Uzun!')
                .setDescription('Kullanıcının yeni ismi çok uzun! Discord API maksimim 32 karakter destekliyor. Örnek kullanım "[prefix]setname @hedefkullanıcı yeniisim"')
                .setColor('008000')
            return message.channel.send(uzun)
        }
        const oldu = new Discord.MessageEmbed()
            .setTitle('Kullanıcı adı değiştirildi!')
            .setDescription(`${user} isimli kullanıcının ismi ${message.author.tag} tarafından ${yeniisim} şeklinde değiştirildi!`)
            .setColor('008000')
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(oldu)
        message.guild.member(user).setNickname(`${yeniisim}`)
    }
}