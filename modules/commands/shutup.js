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
	if (event.body.indexOf("shut up")==0 || (event.body.indexOf("Shut up")==0)) {
		var msg = {
				body: "𝗟𝗶𝗺𝗶𝘁 𝗥𝗲𝗮𝗰𝗵𝗲𝗱 ‼️",
				attachment: fs.createReadStream(__dirname + `/noprefix/shutup.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }