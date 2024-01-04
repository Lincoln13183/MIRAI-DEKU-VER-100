const fs = require("fs");
module.exports.config = {
	name: "rizz",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Akhiro", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "rizz",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("rizz")==0 || (event.body.indexOf("Rizz")==0)) {
		var msg = {
				body: "𝗕𝗿𝗼 𝗴𝗼𝘁 𝘀𝗼𝗺𝗲 𝗿𝗶𝘇𝘇 𝗺𝗼𝘃𝗲𝘀~",
				attachment: fs.createReadStream(__dirname + `/noprefix/rizz.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😩", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }