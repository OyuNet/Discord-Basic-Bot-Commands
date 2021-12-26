const Discord = require('discord.js');

module.exports = {
    name: "bug",
    description: "Rapor komutu!",
    execute(message, args) {
        const reportembed = new Discord.MessageEmbed()
            .setTitle('Başarıyla Yeni Bir Bug`ı Raporladınız!')
            .setColor('#008000')
            .setImage('https://images6.fanpop.com/image/photos/42900000/Tomoya-Okazaki-okazaki-tomoya-42978418-640-480.jpg')
            .setFooter(`Yaptığınız feedbackler sayesinde botu geliştirebiliyorum. Arigato Gozaymas. ${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(reportembed)
        console.log(`Yeni bir bug ${message.author.tag}`, args)
    }
}