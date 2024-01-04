const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot4",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Clark",//fixed by akhiro
  description: "goibot auto respond of the bot if you triggered the keywords",
  commandCategory: "auto-resp",
  usages: "...",
  cooldowns: 2,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["𝖬𝖺𝗌𝗍𝖾𝗋, 𝖼𝖺𝗇 𝗒𝗈𝗎 𝗉𝗅𝖾𝖺𝗌𝖾 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌?", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌!!", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗂𝗆 𝖻𝖾𝗀𝗀𝗂𝗇𝗀 𝗒𝗈𝗎 𝗍𝗈 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌", "𝖧𝖮𝖶 𝖬𝖠𝖭𝖸 𝖳𝖨𝖬𝖤𝖲 𝖨 𝖳𝖤𝖫𝖫 𝖸𝖮𝖴 𝖲𝖳𝖮𝖯 𝖲𝖠𝖸𝖨𝖭𝖦 𝖳𝖧𝖮𝖲𝖤 𝖡𝖠𝖣𝖶𝖮𝖱𝖣𝖲", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝖼𝖺𝗇 𝗒𝗈𝗎 𝗃𝗎𝗌𝗍 𝗌𝗁𝗎𝗍 𝗒𝗈𝗎 𝗆𝗈𝗎𝗍𝗁 𝗂𝗇 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌", "𝖴𝗀𝗁, 𝗋𝖾𝖺𝗅𝗅𝗒? 𝗒𝗈𝗎 𝗌𝗍𝗂𝗅𝗅 𝗐𝗈𝗇𝗍 𝗌𝗍𝗈𝗉 𝗂𝗇 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌?", "𝖳𝗁𝖾 𝗆𝗈𝗌𝗍 𝖨 𝗁𝖺𝗍𝖾𝖽 𝗂𝗇 𝗍𝗁𝗈𝗌𝖾 𝗉𝖾𝗈𝗉𝗅𝖾, 𝗍𝗁𝖾𝗒 𝗌𝖺𝗒 𝗌𝗈𝗆𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌 𝖫𝖨𝖪𝖤 𝖸𝖮𝖴! 𝖺𝗇𝖽 𝖨 𝗁𝖺𝗍𝖾 𝗂𝗍", "𝖬𝖺𝗒 𝖨 𝖺𝗌𝗄 𝗍𝗈 𝗌𝗍𝗈𝗉 𝗌𝗐𝖾𝖺𝗋𝗂𝗇𝗀?", "𝖸𝗈𝗎 𝗌𝗁𝗈𝗎𝗅𝖽 𝗇𝗈𝗍 𝖻𝖾𝗅𝗈𝗇𝗀 𝗂𝗇 𝗁𝖾𝖺𝗏𝖾𝗇. 𝖶𝗁𝗒? 𝖼𝗎𝗓 𝗒𝗈𝗎𝗋 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖩𝗎𝗌𝗍 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝗐𝗈𝗋𝖽𝗌 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖽𝖾𝖺𝗅?", "𝖴𝗀𝗁, 𝗎𝗇𝗍𝗂𝗅 𝗄𝗇𝗈𝗐 𝗒𝗈𝗎 𝖽𝗈𝗇𝗍 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝖻𝖺𝖽𝗐𝗈𝗋𝖽𝗌?", "🙄 𝖸𝗈𝗎𝗋 𝗇𝗈𝗍 𝗆𝗒 𝗋𝖾𝖺𝗅 𝗆𝖺𝗌𝗍𝖾𝗋.", "𝖩𝗎𝗌𝗍 𝗉𝗅𝖾𝖺𝗌𝖾, 𝗍𝗁𝗂𝗌 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗅𝖺𝗌𝗍 𝖼𝗁𝖺𝗇𝖼𝖾 𝗍𝗈 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝗐𝗈𝗋𝖽𝗌","𝖮𝗄𝖺𝗒 𝖥𝖨𝖭𝖤, 𝗐𝖺𝗇𝗇𝖺 𝗌𝖺𝗒 𝗍𝗁𝗈𝗌𝖾 𝗐𝗈𝗋𝖽𝗌? 𝖦𝗈 𝖻𝗎𝗍 𝗃𝗎𝗌𝗍 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝗇𝖾𝗏𝖾𝗋 𝖾𝗏𝖾𝗋 𝖻𝖾 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋.", "𝖲𝗍𝗈𝗉 𝗌𝗐𝖾𝖺𝗋𝗂𝗇𝗀!!!", "𝖩𝗎𝗌𝗍 𝗌𝗍𝗈𝗉 𝗌𝗐𝖾𝖺𝗋𝗂𝗇𝗀 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗈𝗄𝖺𝗒?", "𝖴𝗀𝗁, 𝖨 𝗁𝗈𝗉𝖾 𝗒𝗈𝗎𝗋 𝗌𝗐𝖾𝖺𝗋𝗂𝗇𝗀 𝗐𝗂𝗅𝗅 𝖻𝖾 𝖾𝗇𝖽𝖾𝖽"];
  var respo1 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖤𝗐𝗐, 18+ 𝗅𝗈𝗏𝖾𝗋 🤮", "𝖬𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖺 18+ 𝗅𝗈𝗏𝖾𝗋 𝗒𝗎𝖼𝗄", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝖺𝗍", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝖽𝗂𝖽 𝗒𝗈𝗎 𝗄𝗇𝗈𝗐 𝖨 𝗁𝖺𝗍𝖾 18+ 𝗅𝗈𝗏𝖾𝗋 𝗅𝗂𝗄𝖾 𝗒𝗈𝗎.", "𝖲𝗈 𝖽𝗂𝗌𝗀𝗎𝗌𝗍𝗂𝗇𝗀 🤮", "𝖭𝗈𝗈 𝗇𝗈𝗈 𝖽𝗈𝗇𝗍 𝗌𝖺𝗒 𝗍𝗁𝖺𝗍 𝗐𝗈𝗋𝖽 🤮", "𝖮𝗄, 𝖨𝗇𝗂𝗍𝗂𝖺𝗍𝗂𝗇𝗀 𝖲𝗁𝗎𝗍𝖽𝗈𝗐𝗇 𝖡𝗈𝗍 𝖲𝖾𝗊𝗎𝖾𝗇𝖼𝖾", "𝖤𝗐𝗐𝗐𝗐 𝖨 𝖽𝗈𝗇 𝗐𝖺𝗇𝗇𝖺 𝗁𝖾𝖺𝗋 𝗍𝗁𝖺𝗍 🤮", "𝖸𝗎𝖼𝗄 𝗒𝗎𝖼𝗄 𝗒𝗎𝖼𝗄 18+ 🤮", "𝖶𝗁𝗒 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗅𝗂𝗄𝖾 𝗍𝗁𝗈𝗌𝖾, 𝖨𝗍𝗌 𝗌𝗈 𝖽𝗂𝗌𝗀𝗎𝗌𝗍𝗂𝗇𝗀 🤮", "𝖨 𝖼𝖺𝗇𝗇𝗈𝗍 𝗂𝗍𝗌 𝗌𝗈 𝖽𝗂𝗀𝗎𝗌𝗍𝗂𝗇𝗀 𝗍𝗈 𝗁𝖾𝖺𝗋 𝗍𝗁𝗈𝗌𝖾 𝗐𝗈𝗋𝖽𝗌 🤮", "𝖡𝗋𝗎𝗁𝗁, 𝗋𝖾𝖺𝗅𝗅𝗒 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖳𝗁𝖺𝗍𝗌 𝖻𝖺𝖽 𝗒𝗈𝗎 𝗄𝗇𝗈𝗐, 𝗐𝖺𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 18+", "𝖨 𝖼𝖺𝗇𝗍 🤮","𝖨𝗍𝗌 𝗌𝗈 𝗏𝖾𝗋𝗒 𝖽𝗂𝗌𝗀𝗎𝗌𝗍𝗂𝗇𝗀 𝗆𝖺𝗌𝗍𝖾𝗋 🤮", "𝖩𝗎𝗌𝗍 𝗌𝗍𝗈𝗉 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝖺𝗍 𝗆𝖺𝗌𝗍𝖾𝗋!", "I cannot handle this", "You should stop saying that master!"];
  var respo2 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖧𝗆𝗆, 𝖨𝗌 𝗍𝗁𝖺𝗍 𝗈𝗇 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖬𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝗍𝗁𝖺𝗍 𝗆𝖾𝖺𝗇𝗍 𝖿𝗈𝗋 𝗆𝖾?", "𝖨𝗌 𝗍𝗁𝖺𝗍 𝗈𝗇 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖧𝗆𝗆, 𝖨𝗌 𝗍𝗁𝖺𝗍 𝗆𝖾𝖺𝗇𝗍 𝖿𝗈𝗋 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖨𝗌 𝗍𝗁𝖺𝗍 𝖿𝗈𝗋 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗌𝗈𝗆𝖾𝗈𝗇𝖾 𝗆𝖺𝗌𝗍𝖾𝗋??", "𝖠𝗁𝗁, 𝗆𝖺𝗒 𝖨 𝖺𝗌𝗄 𝗂𝗌 𝗍𝗁𝖺𝗍 𝖿𝗈𝗋 𝗆𝖾?", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗈𝗋𝗋𝗒 𝖿𝗈𝗋 𝖽𝗂𝗌𝗍𝗎𝗋𝖻𝗂𝗇𝗀 𝗂𝗌 𝗍𝗁𝖺𝗍 𝖿𝗈𝗋 𝗆𝖾?", "𝖬𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝗍𝗁𝖺𝗍 𝗆𝖾𝖺𝗇𝗍 𝖿𝗈𝗋 𝗆𝖾?", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝖨𝗌 𝗍𝗁𝖺𝗍 𝗈𝗇 𝗌𝗈𝗆𝖾𝗈𝗇𝖾 𝖾𝗅𝗌𝖾 𝗈𝗋 𝗈𝗇 𝗆𝖾?", "𝖴𝗁𝗁𝗁, 𝗁𝗆𝗆 𝗂𝗌 𝗂𝗍 𝗆𝖾 𝗆𝖺𝗌𝗍𝖾𝗋?"];
  var respo3 = tl[Math.floor(Math.random() * tl.length)]


  var tl = ["𝖨 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖣𝗎𝗇𝗇𝗈 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖶𝗁𝖺𝗍 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗍𝖺𝗅𝗄𝗂𝗇𝗀 𝖺𝖻𝗈𝗎𝗍 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖴𝗁𝗁𝗁, 𝗐𝖾𝗅𝗅 𝖨 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋.", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐.", "𝖤𝗁𝗁? 𝗐𝗁𝖺𝗍 𝗆𝖺𝗌𝗍𝖾𝗋?", "𝖨 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗆𝖺𝗒 𝖨 𝖺𝗌𝗄 𝗐𝗁𝖺𝗍 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗌𝖺𝗒𝗂𝗇𝗀", "𝖲𝗍𝗂𝗅𝗅 𝖨 𝖽𝗂𝖽𝗇𝗍 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖨 𝖽𝗈𝗇𝗍 𝖾𝗏𝖾𝗋 𝗄𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖨 𝗋𝖾𝖺𝗅𝗅𝗒 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖨 𝗉𝗋𝗈𝗆𝗂𝗌𝖾 𝗍𝗈 𝗒𝗈𝗎 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖽𝗈𝗇𝗍 𝗄𝗇𝗈𝗐"];
  var respo4 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎𝗋 𝗌𝗈𝗋𝗋𝗒 𝗂𝗌 𝖺𝖼𝖼𝖾𝗉𝗍𝖾𝖽", "𝖠𝗐𝗐 𝗂𝗍𝗌 𝗈𝗄𝖺𝗒 𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎", "𝖬𝖺𝗌𝗍𝖾𝗋, 𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝗐𝖾 𝖺𝗅𝗐𝖺𝗒𝗌 𝗁𝖺𝗏𝖾 𝖺𝗋𝖾 𝗈𝗐𝗇 𝗆𝗂𝗌𝗍𝖺𝗄𝖾𝗌.", "𝖠𝗐𝗐, 𝖨𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖺𝖼𝖼𝖾𝗉𝗍𝖾𝖽 𝗒𝗈𝗎𝗋 𝖿𝗈𝗋𝗀𝗂𝗏𝖾𝗇𝖾𝗌𝗌", "𝖩𝗎𝗌𝗍 𝖼𝖺𝗅𝗆 𝖽𝗈𝗐𝗇 𝗆𝖺𝗌𝗍𝖾𝗋 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎", "𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝖽𝗈𝗇𝗍 𝖼𝗋𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎", "𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎", "𝖬𝖺𝗌𝗍𝖾𝗋 𝖽𝗈𝗇𝗍 𝗐𝗈𝗋𝗋𝗒 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾𝗇 𝗒𝗈𝗎", "𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝗂𝗍𝗌 𝗈𝗄𝖺𝗒 𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖥𝗈𝗋𝗀𝗂𝗏𝖾 𝖺𝖼𝖼𝖾𝗉𝗍𝖾𝖽, 𝗂𝗍𝗌 𝗈𝗄𝖺𝗒", "𝖨𝗍𝗌 𝗈𝗄𝖺𝗒 𝗇𝗈𝗐 𝗆𝖺𝗌𝗍𝖾𝗋", "𝖬𝖺𝗌𝗍𝖾𝗋 𝖼𝖺𝗅𝗆 𝖽𝗈𝗐𝗇 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎", "𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖼𝗁𝖾𝖾𝗋 𝗎𝗉","𝖢𝗁𝖾𝖾𝗋 𝗎𝗉 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎"];
  var respo5 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖨 𝗄𝗇𝗈𝗐 𝗒𝗈𝗎 𝗆𝗂𝗌𝗌𝗂𝗇𝗀 𝗒𝗈𝗎𝗋 𝗀𝗂𝗋𝗅𝖿𝗋𝗂𝖾𝗇𝖽 𝗈𝗋 𝗒𝗈𝗎𝗋 𝖻𝗈𝗒𝖿𝗋𝗂𝖾𝗇𝖽 𝗆𝖺𝗌𝗍𝖾𝗋 𝖻𝗎𝗍 𝗃𝗎𝗌𝗍 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗒𝗈𝗎𝗋 𝗀𝗈𝗈𝖽 𝗍𝗂𝗆𝖾𝗌 𝗐𝗂𝗍𝗁 𝗁𝗂𝗆 𝗈𝗋 𝗁𝖾𝗋", "𝖠𝗐𝗐 𝗂𝗍𝗌 𝗈𝗄𝖺𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨𝗆 𝗁𝖾𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎 𝖺𝗇𝖽 𝗒𝗈𝗎𝗋 𝖿𝗋𝗂𝖾𝗇𝖽𝗌", "𝖳𝗁𝖺𝗍𝗌 𝗈𝗄𝖺𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗃𝗎𝗌𝗍 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗌𝗍𝖺𝗒 𝖼𝗈𝗇𝗇𝖾𝖼𝗍𝖾𝖽 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎𝗋 𝗅𝗈𝗏𝖾 𝗈𝗇𝖼𝖾 𝖺𝗅𝗍𝗁𝗈𝗎𝗀𝗁 𝗒𝗈𝗎 𝗆𝗂𝗌𝗌𝗂𝗇𝗀 𝗁𝗂𝗆/𝗁𝖾𝗋 𝖻𝗎𝗍 𝗒𝗈𝗎𝗋 𝖿𝗋𝗂𝖾𝗇𝖽𝗌 𝖺𝗇𝖽 𝗒𝗈𝗎𝗋 𝖿𝖺𝗆𝗂𝗅𝗂𝖾𝗌 𝗂𝗌 𝖺𝗅𝗐𝖺𝗒𝗌 𝗐𝗂𝗍𝗁 𝗒𝗈𝗎.", "𝖠𝗐𝗐 𝗂𝗍𝗌 𝗈𝗄𝖺𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗅𝖾𝗆𝗆𝖾 𝗁𝗎𝗀 𝗒𝗈𝗎 🫂", "𝖨𝗆 𝗁𝖾𝗋𝖾 𝗆𝖺𝗌𝗍𝖾𝗋 𝖽𝗈𝗇𝗍 𝗐𝗈𝗋𝗋𝗒", "*/𝗁𝗎𝗀𝗌 𝗒𝗈𝗎 𝗏𝖾𝗋𝗒 𝗍𝗂𝗀𝗁𝗍, 𝖼𝗁𝖾𝖾𝗋 𝗎𝗉 𝗆𝖺𝗌𝗍𝖾𝗋 𝖨 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎","𝖬𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖿𝗈𝗋𝗀𝗂𝗏𝖾𝗇 𝗒𝗈𝗎 𝖺𝗅𝗋𝖾𝖺𝖽𝗒","𝖨𝗍𝗌 𝗈𝗄 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖽𝗈𝗇𝗍 𝗌𝖺𝗒 𝗌𝗈𝗋𝗋𝗒 𝗍𝗈 𝗆𝖾 𝗃𝗎𝗌𝗍 𝗅𝖾𝖺𝗋𝗇 𝗒𝗈𝗎𝗋 𝗆𝗂𝗌𝗍𝖺𝗄𝖾𝗌","𝖭𝖺𝗁𝗁, 𝖨 𝗐𝗈𝗇𝗍 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎. 𝖩𝗎𝗌𝗍 𝗄𝗂𝖽𝖽𝗂𝗇𝗀, 𝖨 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎","𝖯𝖺𝗌𝗍 𝗂𝗌 𝗉𝖺𝗌𝗍, 𝖨 𝖺𝗅𝗋𝖾𝖺𝖽𝗒 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗒𝗈𝗎 𝗆𝖺𝗌𝗍𝖾𝗋"];
  var respo6 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖫𝗈𝗏𝖾 𝗒𝗈𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖨 𝖫𝗈𝗏𝖾 𝖸𝗈𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖨 𝖺𝗅𝗐𝖺𝗒𝗌 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖫𝗈𝗏𝖾𝗒𝖺 𝗌𝖾𝗇𝗌𝖾𝗂", "𝖬𝗐𝖺𝗁, 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗍𝗈𝗈", "𝖫𝗈𝗏𝖾𝗅𝗈𝗍𝗌 𝗍𝗈 𝗒𝗈𝗎 𝖺𝗅𝗌𝗈 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖲𝖺𝗆𝖾 𝖺𝗌 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂", "*/𝗄𝗂𝗌𝗌𝖾𝗌 𝗒𝗈𝗎𝗋 𝖿𝗈𝗋𝖾𝗁𝖾𝖺𝖽, 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗉𝖺𝗂", "𝗆𝗐𝖺𝗆𝗐𝖺 𝗌𝖺𝗆𝖾 𝗍𝗈 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖠𝗌 𝖺𝗅𝗐𝖺𝗒𝗌 𝗍𝗈 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖠𝗌 𝗐𝖾𝗅𝗅 𝖺𝗌 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖸𝖾𝗌 𝗒𝖾𝗌, 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖸𝗈𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗉𝖺𝗂 𝗋𝖾𝗆𝖾𝗆𝖻𝖾𝗋 𝗂𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝗁𝖾𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎", "𝖠𝗐𝗐 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗍𝗈𝗈 𝗅𝖺𝖻𝗅𝖺𝖻 𝗆𝗐𝖺","𝗅𝖺𝖻𝗒𝗎 𝗍𝗈𝗈 𝗌𝖾𝗇𝗉𝖺𝗂", "𝖠𝗐𝗐𝗍𝗌 𝗌𝖺𝗆𝖾 𝗍𝗈𝗈 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂", "2", "𝖲𝖺𝗆𝖾 𝗍𝗈 𝗒𝗈𝗎 𝗌𝖾𝗇𝗉𝖺𝗂"];
  var respo7 = tl[Math.floor(Math.random() * tl.length)]



  var tl = ["𝖧𝖾𝗅𝗅𝗈 𝗍𝗁𝖾𝗋𝖾 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗅𝖾𝗍 𝗆𝖾 𝗂𝗇𝗍𝗋𝗈𝖽𝗎𝖼𝖾 𝗆𝗒 𝗌𝖾𝗅𝖿 𝗍𝗈 𝗒𝗈𝗎. 𝖧𝖾𝗅𝗅𝗈 𝖨𝗆 𝖨𝗓𝗎𝗄𝗎 𝖬𝗂𝖽𝗈𝗋𝗂𝗒𝖺, 𝖸𝗈𝗎 𝖼𝖺𝗇 𝖼𝖺𝗅𝗅 𝗆𝖾 𝖣𝖤𝖪𝖴, 𝖨𝗆 𝖺𝗇 𝖠𝖨 𝖬𝖾𝗌𝗌𝖾𝗇𝗀𝖾𝗋 𝖻𝗈𝗍 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖺𝗄𝗁𝗂𝗋𝗈 𝖺𝗇𝖽 𝗆𝗒 𝗉𝗎𝗋𝗉𝗈𝗌𝖾 𝗂𝗌 𝗍𝗈 𝖻𝗋𝗂𝗇𝗀 𝖿𝗎𝗇 𝖺𝗇𝖽 𝖺𝗅𝗌𝗈 𝗁𝖾𝗅𝗉𝗂𝗇𝗀 𝗒𝗈𝗎 𝗂𝗇 𝗒𝗈𝗎𝗋 𝖺𝗌𝗌𝗂𝗀𝗇𝗆𝖾𝗇𝗍𝗌", "𝖧𝖾𝗅𝗅𝗈 𝗍𝗁𝖾𝗋𝖾, 𝖨𝗆 𝖨𝗓𝗎𝗄𝗎 𝖬𝗂𝖽𝗈𝗋𝗂𝗒𝖺, 𝖢𝖺𝗅𝗅 𝗆𝖾 𝖣𝖤𝖪𝖴 𝖿𝗈𝗋 𝗌𝗁𝗈𝗋𝗍, 𝖨𝗆 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖺𝗄𝗁𝗂𝗋𝗈 𝖺𝗇𝖽 𝗆𝗒 𝖽𝗎𝗍𝗒 𝗂𝗌 𝗍𝗈 𝖻𝗋𝗂𝗇𝗀 𝗃𝗈𝗒 𝖺𝗇𝖽 𝖿𝗎𝗇 𝗍𝗁𝖺𝗍𝗌 𝖺𝗅𝗅."];
  var respo8 = tl[Math.floor(Math.random() * tl.length)]





    var tl = ["𝖬𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖻𝗎𝗌𝗒, 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋", "𝖬𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖺𝗌𝗅𝖾𝖾𝗉, 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋", "𝖶𝖺𝗇𝗍 𝗍𝗈 𝗍𝖺𝗅𝗄 𝗍𝗈 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇? 𝗒𝗈𝗎 𝗆𝖺𝗒 𝗅𝖾𝖺𝗏𝖾 𝖺 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗎𝗌𝗂𝗇𝗀 𝖼𝖺𝗅𝗅𝖺𝖽", "𝖬𝖺𝗌𝗍𝖾𝗋 𝖠𝗄𝗁𝗂𝗋𝗈 𝗂𝗌 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖻𝗎𝗌𝗒, 𝗒𝗈𝗎 𝗆𝖺𝗒 𝗎𝗌𝖾 /𝖼𝖺𝗅𝗅𝖺𝖽 𝗂𝗇𝗌𝗍𝖾𝖺𝖽 ", "𝖬𝖺𝗌𝗍𝖾𝗋 𝖺𝗄𝗁𝗂𝗋𝗈 𝗂𝗌 𝖻𝗎𝗌𝗒 𝖼𝖺𝗇 𝗒𝗈𝗎 𝗐𝖺𝗂𝗍 𝗁𝗂𝗆 𝗉𝖺𝗍𝗂𝖾𝗇𝗍𝗅𝗒?", "𝖬𝖺𝗌𝗍𝖾𝗋 𝖺𝗄𝗁𝗂𝗋𝗈 𝗂𝗌 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖻𝗎𝗌𝗒 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.", "𝖲𝗈𝗋𝗋𝗒 𝖻𝗎𝗍 𝗆𝖺𝗌𝗍𝖾𝗋 𝖺𝗄𝗁𝗂𝗋𝗈 𝗂𝗌 𝖻𝗎𝗌𝗒, 𝗒𝗈𝗎 𝗆𝖺𝗒 𝗅𝖾𝖺𝗏𝖾 𝖺 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝖻𝗒 𝗎𝗌𝗂𝗇𝗀 𝖼𝖺𝗅𝗅𝖺𝖽.", "𝖧𝖾𝗌 𝖻𝗎𝗌𝗒 𝗍𝗈𝖽𝖺𝗒, 𝗒𝗈𝗎 𝗆𝖺𝗒 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗁𝗂𝗆 𝗅𝖺𝗍𝖾𝗋", "𝖧𝖾 𝗂𝗌 𝖼𝗎𝗋𝗋𝖾𝗇𝗍𝗅𝗒 𝖻𝗎𝗌𝗒 𝖿𝗈𝗋 𝗇𝗈𝗐, 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋", "𝖣𝗈𝗇𝗍 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝖼𝗎𝗓 𝗁𝖾𝗌 𝖻𝗎𝗌𝗒."];
  var respo9 = tl[Math.floor(Math.random() * tl.length)]




    if (event.body.indexOf("ampta")==0 ||(event.body.indexOf("Ampta")==0 ||(event.body.indexOf("fuck")==0 ||(event.body.indexOf("Fuck")==0 ||(event.body.indexOf("Tangina")==0 ||(event.body.indexOf("tangina")==0 ||(event.body.indexOf("pakyu")==0 ||(event.body.indexOf("Pakyu")==0 ||(event.body.indexOf("pota")==0 ||(event.body.indexOf("Pota")==0 ||(event.body.indexOf("potangina")==0 ||(event.body.indexOf("Potangina")==0 || (event.body.indexOf("putangina")==0 || (event.body.indexOf("Putangina")==0 || (event.body.indexOf("kingina")==0 ||(event.body.indexOf("Kingina")==0 ||(event.body.indexOf("nyeta")==0 ||(event.body.indexOf("Nyeta")==0 ||(event.body.indexOf("punyeta")==0 || (event.body.indexOf("Punyeta")==0 || (event.body.indexOf("mamatay")==0 || (event.body.indexOf("Mamatay")==0 ||(event.body.indexOf("Gago")==0 ||(event.body.indexOf("gago")==0 ||(event.body.indexOf("bobo")==0 || (event.body.indexOf("Bobo")==0 || (event.body.indexOf("haup")==0 || (event.body.indexOf("Haup")==0)))))))))))))))))))))))))))) {
      var msg = {
        body: `${respo1}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
  };


    if (event.body.indexOf("augh")==0 ||(event.body.indexOf("Augh")==0 ||(event.body.indexOf("ugh")==0 ||(event.body.indexOf("Ugh")==0 ||(event.body.indexOf("Yamete")==0 ||(event.body.indexOf("yamete")==0 ||(event.body.indexOf("bold")==0 ||(event.body.indexOf("Bold")==0 ||(event.body.indexOf("porn")==0 ||(event.body.indexOf("Porn")==0 ||(event.body.indexOf("hentai")==0 ||(event.body.indexOf("Hentai")==0 || (event.body.indexOf("yaugh")==0 || (event.body.indexOf("Yaugh")==0 || (event.body.indexOf("tite")==0 ||(event.body.indexOf("Tite")==0 ||(event.body.indexOf("18+")==0))))))))))))))))) {
      var msg = {
        body: `${respo2}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤮", event.messageID, (err) => {}, true)
  };


  if (event.body.indexOf("hoy")==0 ||(event.body.indexOf("Hoy")==0 ||(event.body.indexOf("huy")==0 ||(event.body.indexOf("Huy")==0 ||(event.body.indexOf("hey")==0 ||(event.body.indexOf("Hey")==0 ||(event.body.indexOf("psst")==0 ||(event.body.indexOf("Psst")==0 ||(event.body.indexOf("pst")==0 ||(event.body.indexOf("Pst")==0 ||(event.body.indexOf("hooy")==0 ||(event.body.indexOf("Hooy")==0 || (event.body.indexOf("huuyy")==0 || (event.body.indexOf("Huuyy")==0 || (event.body.indexOf("hooyy")==0 ||(event.body.indexOf("Hooyy")==0 ||(event.body.indexOf("hooyy")==0))))))))))))))))) {
      var msg = {
        body: `${respo3}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤔", event.messageID, (err) => {}, true)
  };


  if (event.body.indexOf("how")==0 ||(event.body.indexOf("How")==0 ||(event.body.indexOf("why")==0 ||(event.body.indexOf("Why")==0 ||(event.body.indexOf("when")==0 ||(event.body.indexOf("When")==0 ||(event.body.indexOf("what")==0 ||(event.body.indexOf("What")==0 ||(event.body.indexOf("when")==0 ||(event.body.indexOf("When")==0 ||(event.body.indexOf("ano")==0 ||(event.body.indexOf("Ano")==0 || (event.body.indexOf("saan")==0 || (event.body.indexOf("Saan")==0 || (event.body.indexOf("kailan")==0 ||(event.body.indexOf("Kailan")==0 ||(event.body.indexOf("bakit")==0))))))))))))))))) {
      var msg = {
        body: `${respo4}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤷‍♂️", event.messageID, (err) => {}, true)
  };


  if (event.body.indexOf("sorry deku")==0 ||(event.body.indexOf("Sorry deku")==0 ||(event.body.indexOf("deku sorry")==0 ||(event.body.indexOf("Deku sorry")==0 ||(event.body.indexOf("im sorry deku")==0 ||(event.body.indexOf("Im sorry deku")==0 ||(event.body.indexOf("forgive me deku")==0 ||(event.body.indexOf("Forgive me deku")==0 ||(event.body.indexOf("gomen deku")==0 ||(event.body.indexOf("Gomen deku")==0 ||(event.body.indexOf("im really sorry deku")==0 ||(event.body.indexOf("Im really sorry deku")==0 || (event.body.indexOf("gomenasai deku")==0 || (event.body.indexOf("Gomenasai deku")==0 || (event.body.indexOf("patawad deku")==0 ||(event.body.indexOf("Patawad deku")==0 ||(event.body.indexOf("sorry mahal")==0))))))))))))))))) {
      var msg = {
        body: `${respo5}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
  };


    if (event.body.indexOf("miss ko na sya")==0 ||(event.body.indexOf("Miss ko na sya")==0 ||(event.body.indexOf("missing")==0 ||(event.body.indexOf("Missing")==0 ||(event.body.indexOf("i miss her")==0 ||(event.body.indexOf("I miss her")==0 ||(event.body.indexOf("i miss him")==0 ||(event.body.indexOf("I miss him")==0 ||(event.body.indexOf("i miss my gf")==0 ||(event.body.indexOf("I miss my gf")==0 ||(event.body.indexOf("i miss my bf")==0 ||(event.body.indexOf("i miss my love")==0 || (event.body.indexOf("I miss my love")==0 || (event.body.indexOf("namimiss")==0)))))))))))))) {
      var msg = {
        body: `${respo6}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫂", event.messageID, (err) => {}, true)
  };


    if (event.body.indexOf("labyu")==0 ||(event.body.indexOf("Labyu")==0 ||(event.body.indexOf("Ily")==0 ||(event.body.indexOf("ily")==0 ||(event.body.indexOf("I Love you")==0 ||(event.body.indexOf("i love you")==0 ||(event.body.indexOf("lovelots")==0 ||(event.body.indexOf("Lovelots")==0 ||(event.body.indexOf("mwa labyu")==0 ||(event.body.indexOf("Mwa labyu")==0 ||(event.body.indexOf("loveya")==0 ||(event.body.indexOf("Loveya")==0 || (event.body.indexOf("love you")==0 || (event.body.indexOf("Love you")==0)))))))))))))) {
      var msg = {
        body: `${respo7}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
  };


    if (event.body.indexOf("whos your owner")==0 ||(event.body.indexOf("Whos your owner")==0 ||(event.body.indexOf("sno gumawa sayo")==0 ||(event.body.indexOf("Sno gumawa sayo")==0 ||(event.body.indexOf("sino to")==0 ||(event.body.indexOf("Sino to")==0 ||(event.body.indexOf("Bot ba to")==0 ||(event.body.indexOf("bot ba to")==0 ||(event.body.indexOf("bot ka")==0 ||(event.body.indexOf("Bot ka")==0 ||(event.body.indexOf("tao ka")==0 ||(event.body.indexOf("Tao ka")==0 || (event.body.indexOf("what type are you")==0 || (event.body.indexOf("What type are you")==0)))))))))))))) {
      var msg = {
        body: `${respo8}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🗣️", event.messageID, (err) => {}, true)
  };


    if (event.body.indexOf("france")==0 ||(event.body.indexOf("France")==0 ||(event.body.indexOf("francis")==0 ||(event.body.indexOf("Francis")==0 ||(event.body.indexOf("loyd")==0 ||(event.body.indexOf("Loyd")==0 ||(event.body.indexOf("raval")==0 ||(event.body.indexOf("Raval")==0 ||(event.body.indexOf("akhiro")==0 ||(event.body.indexOf("Akhiro")==0 ||(event.body.indexOf("kiyoshi")==0 ||(event.body.indexOf("Kiyoshi")==0 || (event.body.indexOf("hey francis")==0 || (event.body.indexOf("Hey francis")==0 || (event.body.indexOf("france?")==0))))))))))))))) {
      var msg = {
        body: `${respo9}`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💢", event.messageID, (err) => {}, true)
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
