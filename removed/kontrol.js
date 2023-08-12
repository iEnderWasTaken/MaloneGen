const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports = {
	name: 'kontrol',
	description: 'Bir servisi kontrol edin.',

    /**
     * Command exetute
     * @param {Message} message The message sent by user
     * @param {Array} args Arguments splitted by spaces after the command name
     */
	execute(message, args) {
        if (!args[0]) {
            return message.channel.send(
                new Discord.MessageEmbed()
                .setColor(config.color.red)
                .setTitle('Eksik parametreler')
                .setDescription('Bir hizmet adı vermeniz gerekiyor!')
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
            );
        };

        const filePath = `${__dirname}/../stock/${args[0]}.txt`;

        const lines = [];

        var fileContents;

        try {
            fileContents = fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            if (error) {
                return message.channel.send(
                    new Discord.MessageEmbed()
                    .setColor(config.color.red)
                    .setTitle('Kontrol hatası.')
                    .setDescription(` \`${args[0]}\` servisini stoğumda bulamıyorum!`)
                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                );
            };
        };

        fileContents.split(/\r?\n/).forEach(function (line) {
            lines.push(line);
        });

        message.channel.send(
            new Discord.MessageEmbed()
            .setColor(config.color.green)
            .setTitle(`Servis kontrol edildi!`)
            .setDescription(`**\`${args[0]}\`** **\`${lines.length}\`** tane hesaba sahip.`)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
        );
    }
};
