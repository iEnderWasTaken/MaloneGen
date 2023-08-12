// Dependencies
const { MessageEmbed, Message } = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'yardım', // Command name
	description: 'Komutların listesini gösterir.', // Command description

    /**
     * Command exetute
     * @param {Message} message The message sent by user
     */
	execute(message) {
		const { commands } = message.client; // Get commands from the client
        
        message.channel.send(
            new MessageEmbed()
            .setColor(config.color.default)
            .setTitle('Komut Listesi')
            .setDescription(commands.map(c => `**\`${config.prefix}${c.name}\`**: ${c.description ? c.description : '* Açıklama yapılmadı*'}`).join('\n')) // Mapping the commands
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
            .setTimestamp()
        );
	}
};
