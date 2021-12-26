const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "botu kendi sunucuna davet etmek için bir komut",
    execute(message, args){
        const embed = new Discord.MessageEmbed()
            .setTitle('Moderation+ Davet Linki')
            .setDescription(`Demek bot hoşuna gitti. Al bakalım [Davet Linki.](https://discord.com/oauth2/authorize?client_id=864556744264384532&scope=bot&permissions=8)`)
            .setColor('#008000')
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}