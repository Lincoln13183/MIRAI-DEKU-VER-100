const fs = require("fs");
module.exports.config = {
	name: "shutup",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Akhiro", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "shutup",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("toothless")==0 || (event.body.indexOf("Toothless")==0)) {
		var msg = {
				body: "𝗧𝗼𝗼𝘁𝗵𝗹𝗲𝘀𝘀 𝗗𝗮𝗻𝗰𝗲",
				attachment: fs.createReadStream(__dirname + `/noprefix/toothless.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😌", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }