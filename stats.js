const Discord = require('discord.js');
const prettyMilliseconds = require("pretty-ms");

module.exports = {
    name: "stats",
    description: "İstatistik Komutu",
    execute(message, args) {
        message.channel.send('Gecikme hesaplanıyor...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp
            const userCount = message.guild.memberCount.toLocaleString();
            const embed = new Discord.MessageEmbed()
                .setTitle('Botun Anlık İstatistikleri :trophy:')
                .setColor('#008000')
                .addField("Botun Gecikmesi :clock1:", `**${ping}ms**.`, true)
                .addField("API Gecikmesi :clock1:", `**${Math.round(message.client.ws.ping)}ms**.`, true)
                .addField('\u200B', '\u200B')
                .addField("Uptime :date:", `**${prettyMilliseconds(message.client.uptime)}** süredir aktif olarak çalışıyorum.`, true)
                .addField("**RAM Kullanımı :mechanic:**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** MB`, true)
                .addField('\u200B', '\u200B')
                .addField("Hizmet Verilen Sunucu Sayısı :ringed_planet:", `${message.client.guilds.cache.size}`, true)
                .addField("Hizmet Verilen Kullanıcı Sayısı :dizzy:", `${userCount}`, true)
                .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
        })
    }
}