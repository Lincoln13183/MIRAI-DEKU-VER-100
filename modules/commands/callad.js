module.exports.config = {
	name: "callad",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "NTKhang, ManhG Fix Get",
	description: "Report bot's error to admin or comment",
	commandCategory: "group",
	usages: "[Error encountered or comments]",
	cooldowns: 5
}, module.exports.handleReply = async function({
	api: e,
	args: n,
	event: a,
	Users: s,
	handleReply: o
}) {
	var i = await s.getNameUser(a.senderID);
	switch (o.type) {
		case "reply":
			var t = global.config.ADMINBOT;
			for (let n of t) e.sendMessage({
				body: "✿︎━━━━━━━━━━━━━━━━━✿︎\n❖《《 𝖥•𝖠•𝖡 𝖣𝖤𝖪𝖴𝖡𝖮𝖳 》》❖\n✿︎━━━━━━━━━━━━━━━━━✿︎\n💭 | 𝗔 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 𝗠𝗮𝘀𝘁𝗲𝗿 " + i + ":\n✿︎━━━━━━━━━━━━━━━━━✿︎\n《 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 》 " + a.body,
				mentions: [{
					id: a.senderID,
					tag: i
				}]
			}, n, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				messageID: n.messageID,
				messID: a.messageID,
				author: a.senderID,
				id: a.threadID,
				type: "calladmin"
			})));
			break;
		case "calladmin":
			e.sendMessage({
				body: `✿︎━━━━━━━━━━━━━━━━━✿︎
❖《《 𝖥•𝖠•𝖡 𝖣𝖤𝖪𝖴𝖡𝖮𝖳 》》❖
✿︎━━━━━━━━━━━━━━━━━✿︎📌 | 𝗔 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 ${i} 𝘁𝗼 𝘆𝗼𝘂\n✿︎━━━━━━━━━━━━━━━━━✿︎\n《 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 》 ${a.body}\n\n🕔 | 𝗧𝗶𝗺𝗲: ${l}\n✿︎━━━━━━━━━━━━━━━━━✿︎\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎 𝗆𝖺𝗒 𝗋𝖾𝗉𝗅𝗒 𝗍𝗈 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝗌𝖾𝗇𝖽𝗂𝗇𝗀 𝗋𝖾𝗉𝗈𝗋𝗍𝗌 𝗍𝗈 𝗍𝗁𝖾 𝖺𝖽𝗆𝗂𝗇𝗌.\n✿︎━━━━━━━━━━━━━━━━━✿︎`,
				mentions: [{
					tag: i,
					id: a.senderID
				}]
			}, o.id, ((e, n) => global.client.handleReply.push({
				name: this.config.name,
				author: a.senderID,
				messageID: n.messageID,
				type: "reply"
			})), o.messID)
	}
}, module.exports.run = async function({
	api: e,
	event: n,
	args: a,
	Users: s,
	Threads: o
}) {
	if (!a[0]) return e.sendMessage("ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗉𝗅𝖾𝖺𝗌𝖾 𝖾𝗇𝗍𝖾𝗋 𝖺 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗉𝗈𝗋𝗍.", n.threadID, n.messageID);
	let i = await s.getNameUser(n.senderID);
	var t = n.senderID,
		d = n.threadID;
	let r = (await o.getData(n.threadID)).threadInfo;
	var l = require("moment-timezone").tz("Asia/Manila").format("HH:mm:ss D/MM/YYYY");
	e.sendMessage(`✿︎━━━━━━━━━━━━━━━━━✿︎
❖《《 𝖥•𝖠•𝖡 𝖣𝖤𝖪𝖴𝖡𝖮𝖳 》》❖
✿︎━━━━━━━━━━━━━━━━━✿︎\n🕔 | 𝗧𝗶𝗺𝗲: ${l}\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗒𝗈𝗎𝗋 𝗋𝖾𝗉𝗈𝗋𝗍 𝗐𝖺𝗌 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗌𝖾𝗇𝗍 𝗍𝗈 𝗆𝗒 𝖻𝗈𝗍 𝖺𝖽𝗆𝗂𝗇𝗌\n✿︎━━━━━━━━━━━━━━━━━✿︎`, n.threadID, (() => {
		var s = global.config.ADMINBOT;
		for (let o of s) {
			let s = r.threadName;
			e.sendMessage(`✿︎━━━━━━━━━━━━━━━━━✿︎
❖《《 𝖥•𝖠•𝖡 𝖣𝖤𝖪𝖴𝖡𝖮𝖳 》》❖
✿︎━━━━━━━━━━━━━━━━━✿︎\𝗇👤 | 𝗥𝗲𝗽𝗼𝗿𝘁 𝗙𝗿𝗼𝗺: ${i}\n👨‍👩‍👧‍👧 | 𝗚𝗿𝗼𝘂𝗽 𝗡𝗮𝗺𝗲: ${s}\n🔰 | 𝗜𝗗 𝗕𝗼𝘅: ${d}\n🔷 | 𝗜𝗗 𝗨𝘀𝗲: ${t}\n✿︎━━━━━━━━━━━━━━━━━✿︎\n⚠️ | 𝗘𝗿𝗿𝗼𝗿 𝗥𝗲𝗽𝗼𝗿𝘁: ${a.join(" ")}\n✿︎━━━━━━━━━━━━━━━━━✿︎\n🕔 | 𝗧𝗶𝗺𝗲: ${l}\n✿︎━━━━━━━━━━━━━━━━━✿︎`, o, ((e, a) => global.client.handleReply.push({
				name: this.config.name,
				messageID: a.messageID,
				author: n.senderID,
				messID: n.messageID,
				id: d,
				type: "calladmin"
			})))
		}
	}))
};