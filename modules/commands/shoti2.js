module.exports.config = {
  name: "shoti2",
  version: "1.0.2",
  credits: "Réynél",
  description: "Generate random tiktok girl videos",
  hasPermssion: 0,
  commandCategory: "entertainment",
  usage: "[shoti2]",
  cooldowns: 5,
  dependencies: [],
};
 
module.exports.run = async function ({ api, event }) {
  try {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs");
    let response = await axios.post(
      "https://api--v1-shoti.vercel.app/api/v1/get",
      {
        apikey: "shoti-1ha4h3do8at9a7ponr",
      },
    );
    var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
    var rqs = request(encodeURI(response.data.data.url));
    rqs.pipe(file);
    file.on("finish", () => {
      return api.sendMessage(
        {
          body: `✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗁𝖾𝗋𝖾 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗍𝗂𝗄𝗍𝗈𝗄 𝗌𝗁𝗈𝗍𝗂 𝗏𝗂𝖽𝖾𝗈:\n━━━━━━━━━━━━━━━━━━━\n@${response.data.data.user.username}`,
          attachment: fs.createReadStream(__dirname + "/cache/shoti.mp4"),
        },
        event.threadID,
        event.messageID,
      );
    });
    file.on("error", (err) => {
      api.sendMessage(`❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝖺𝗍: ${err}`, event.threadID, event.messageID);
    });
  } catch (error) {
    api.sendMessage(
      "❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗀𝖾𝗇𝖾𝗋𝖺𝗍𝗂𝗇𝗀 𝗏𝗂𝖽𝖾𝗈:" + error,
      event.threadID,
      event.messageID,
    );
  }
};