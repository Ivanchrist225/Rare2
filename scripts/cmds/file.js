const fs = require('fs');

module.exports = {
	config: {
		name: "file",
		aliases: ["files"],
		version: "1.0",
		author: "Mahir Tahsan",
		countDown: 5,
		role: 0,
		shortDescription: "Send bot script",
		longDescription: "Send bot specified file ",
		category: "𝗢𝗪𝗡𝗘𝗥",
		guide: "{pn} file name. Ex: .{pn} filename"
	},

	onStart: async function ({ message, args, api, event }) {
		const permission = ["61551757747742"];
		if (!permission.includes(event.senderID)) {
			return api.sendMessage(" 𝗬𝗼 𝗱𝗲́𝗴𝗮𝗴𝗲 😐... 𝘀𝗲𝘂𝗹 𝗺𝗼𝗻 𝗯𝗼𝘀𝘀 𝖁𝖔𝖑𝖉𝖎𝖌𝖔 𝗽𝗲𝘂𝘁 𝘂𝘁𝗶𝗹𝗶𝘀𝗲́ 𝗰𝗲𝘁𝘁𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝗲 😒. 🐤", event.threadID, event.messageID);
		}

		const fileName = args[0];
		if (!fileName) {
			return api.sendMessage("Please provide a file name.", event.threadID, event.messageID);
		}

		const filePath = __dirname + `/${fileName}.js`;
		if (!fs.existsSync(filePath)) {
			return api.sendMessage(`File not found: ${fileName}.js`, event.threadID, event.messageID);
		}

		const fileContent = fs.readFileSync(filePath, 'utf8');
		api.sendMessage({ body: fileContent }, event.threadID);
	}
};
