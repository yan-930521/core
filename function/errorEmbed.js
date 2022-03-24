const { MessageEmbed } = require("discord.js");
const { embedColor } = require("../config.json");
// 使用紅色警告色
module.exports = (channel, author, type, content) => {
	channel.send({
		embeds: [
			new MessageEmbed()
			.setAuthor({
				name: type,
			})
	    	.setColor(embedColor.error)
			.setDescription(content)
			.setFooter({
				text: author.tag
			})
			.setTimestamp()
		]
	}); 
}