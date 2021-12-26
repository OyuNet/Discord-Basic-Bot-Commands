# Discord-Basic-Bot-Commands

Add this codes to your index.js file. And dont forget to install fs, otherwise that commands dont going to work.

```
npm i fs, discord.js
```

```
const fs = require('fs');



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try{
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Bu komutu çalıştırırken bir hata oluştu.')
    }
});
```
