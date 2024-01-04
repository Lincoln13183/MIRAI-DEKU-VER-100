const fs = require("fs");
module.exports.config = {
	name: "chipi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Akhiro", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "chipi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chipi")==0 || (event.body.indexOf("Chipi")==0)) {
		var msg = {
				body: "𝗖𝗵𝗶𝗽𝗶 𝗖𝗵𝗶𝗽𝗶 >_<",
				attachment: fs.createReadStream(__dirname + `/noprefix/chipi.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }